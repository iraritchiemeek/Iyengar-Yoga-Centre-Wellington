import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { ContentContainer, VerticalSpace, FlexContainer, FlexItem, InnerContainer } from "../styled-components/layout"
import TripleTextColumn from "../components/tripleTextColumn"

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

class Retreat extends React.Component {
  render() {
    const { data } = this.props
    const retreat = this.props.data.contentfulRetreat
    const startDate = new Date(retreat.startDate).getDate()
    const endDate = new Date(retreat.endDate).getDate()
    const startMonth = monthNames[new Date(retreat.startDate).getMonth()]
    const endMonth = monthNames[new Date(retreat.endDate).getMonth()]
    const year = new Date(retreat.startDate).getFullYear()

    console.log(retreat)

    return (
      <Layout>
        <SEO title="Retreat" />
        <ContentContainer>
          <InnerContainer>
            <h1>{retreat.title}</h1>
            <h2>{startDate} {startMonth} - {endDate} {endMonth} {year}</h2>
          </InnerContainer>
          <FlexContainer>
            {retreat.photos.map(photo => {
              return (
                <FlexItem>
                  <Img style={{ minHeight: '230px' }} fluid={photo.fluid} />
                </FlexItem>
              )
            })}
          </FlexContainer>
          {retreat.tripleTextColumns.map(column => {
            return (
              <TripleTextColumn content={column.content} title={column.title} />
            )
          })}
        </ContentContainer>
      </Layout>
    )
  }
}

export default Retreat

export const pageQuery = graphql`
  query ContentfulRetreatByTitle($title: String!) {
    contentfulRetreat( title: {eq: $title}) {
      title
      startDate
      endDate
      mainPhoto {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      photos {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      tripleTextColumns {
        title
        content {
          json
        }
      }
    }
  }
`

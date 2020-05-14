import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { ContentContainer, VerticalSpace, FlexContainer, FlexItem, InnerContainer } from "../styled-components/layout"
import TripleTextColumn from "../components/tripleTextColumn"
import SingleTextColumn from "../components/singleTextColumn"

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

    const renderPhotos = retreat => {
      if (!retreat.photos) return null
      return (
        <FlexContainer>
          {retreat.photos.map(photo => {
            return (
              <FlexItem>
                <Img style={{ height: '230px' }} fluid={photo.fluid} />
              </FlexItem>
            )
          })}
        </FlexContainer>
      )
    } 

    const renderTripleTextColumns = retreat => {
      if (!retreat.tripleTextColumns) return null
      return (
        retreat.tripleTextColumns.map(column => <TripleTextColumn content={[column.column1, column.column2, column.column3]} title={column.title} /> )
      )
    }

    const renderSingleTextColumns = retreat => {
      if (!retreat.singleTextColumn) return null
      return (
        retreat.singleTextColumn.map(column => {
          return (
              <SingleTextColumn content={column.content.json} title={column.title} image={column.image} />
          )
        })
      )
    }

    return (
      <Layout>
        <SEO title="Retreat" />
        <ContentContainer>
          <InnerContainer>
            <h1>{retreat.title}</h1>
          </InnerContainer>
          {renderPhotos(retreat)}
          <InnerContainer>
            <h2>{startDate} {startMonth} - {endDate} {endMonth} {year}</h2>
          </InnerContainer>
          <FlexContainer>
            {renderTripleTextColumns(retreat)}
            {renderSingleTextColumns(retreat)}
          </FlexContainer>
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
      singleTextColumn {
        title
        content {
          json
        }
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
      tripleTextColumns {
        title
        column1 {
          json
        }
        column2 {
          json
        }
        column3 {
          json
        }
      }
    }
  }
`

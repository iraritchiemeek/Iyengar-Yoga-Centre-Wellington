import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { ContentContainer, FlexContainer, FlexItem } from "../styled-components/layout"
import { NoSpaceP } from "../styled-components/text"
import Quote from "../components/quote"
import SingleTextColumn from '../components/singleTextColumn'

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

class RetreatsPage extends React.Component {
  render() {
    const { data } = this.props
    const retreats = data.allContentfulRetreat.edges

    const renderDate = date => new Date(date).getDate()
    const renderMonth = date => monthNames[new Date(date).getMonth()]
    const renderYear = date => new Date(date).getFullYear()
    const slug = title => title.replace(/\s/g, '-').toLowerCase()

    return (
      <Layout>
        <SEO title="Class Types" />
        <ContentContainer>
          <FlexContainer>
            {retreats.map(retreat => {
              return (
                  <FlexItem>
                    <Link to={`/retreats/${slug(retreat.node.title)}`}>
                      <Img fluid={retreat.node.mainPhoto.fluid} />
                      <h2>{retreat.node.title}</h2>
                      <NoSpaceP>{renderDate(retreat.node.startDate)} - {renderDate(retreat.node.endDate)} {renderMonth(retreat.node.startDate)} {renderYear(retreat.node.startDate)}</NoSpaceP>
                    </Link>
                  </FlexItem>
              )
            })}
          </FlexContainer>
        </ContentContainer>
      </Layout>
    )
  }
}

export default RetreatsPage

export const pageQuery = graphql`
  query {
    allContentfulRetreat {
      edges {
        node {
          startDate
          endDate
          title
          tripleColumnText {
            title
            content {
              json
            }
          }
          mainPhoto {
            fluid {
              ...GatsbyContentfulFluid
            }
          } 
        }
      }
    }
  }
`

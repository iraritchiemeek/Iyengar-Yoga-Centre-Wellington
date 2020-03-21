import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FullWidthImg from "../components/fullWidthImg"
import { ContentContainer, FlexContainer, FlexItem, InnerContainer, VerticalSpace, Button } from "../styled-components/layout"
import { NoSpaceP } from "../styled-components/text"
import Quote from "../components/quote"
import SingleTextColumn from '../components/singleTextColumn'
import RetreatListItem from '../components/retreatListItem'

class RetreatsPage extends React.Component {
  render() {
    const { data } = this.props
    const retreats = data.allContentfulRetreat.edges


    return (
      <Layout>
        <SEO title="Class Types" />
        <ContentContainer>
          <InnerContainer>
            <h1>Yoga Retreats</h1>
          </InnerContainer>
          <VerticalSpace space="15px" />
          <FlexContainer>
            {retreats.map(retreat => {
              return (
                <RetreatListItem retreat={retreat.node} />
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
    allContentfulRetreat(
      sort: {
        fields: [order]
        order: ASC
      }
    ) {
      edges {
        node {
          startDate
          endDate
          title
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

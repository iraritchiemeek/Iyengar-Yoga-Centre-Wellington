import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import PricesList from "../components/pricesList"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { ContentContainer, VerticalSpace, FlexContainer } from "../styled-components/layout"
import TripleImage from '../components/tripleImage'
import Quote from '../components/quote'
import SingleTextColumn from '../components/singleTextColumn'

class PricingPage extends React.Component {
  render() {
    const { data } = this.props
    const prices = data.allContentfulPrice.edges
    const page = data.allContentfulPage.edges[0].node
    const singleTextColumns = page.singleTextColumns

    return (
      <Layout>
        <SEO title="Pricing" />
        <ContentContainer>
          <Quote page={page}/>
          <PricesList prices={prices}></PricesList>
          <FlexContainer>
            {singleTextColumns.map(content => {
              return (
                <SingleTextColumn title={content.title} content={content.content.json}/>
              )
            })}
          </FlexContainer>
          <TripleImage page={page} />
        </ContentContainer>
      </Layout>
    )
  }
}

export default PricingPage

export const pageQuery = graphql`
  query {
    allContentfulPage(
      filter: {pageId: {eq: "pricing"}}
    ){
      edges {
        node {
          singleTextColumns {
            title
            content {
              json
            }
          }
          headerQuote {
            headerQuote
          }
          headerQuoteAuthor
          tripleTextColumnPhotos {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
    allContentfulPrice{
      edges {
        node {
          title
          description {
            json
          }
          validityPeriod
          price
          punchPassId
          allottedClasses
        }
      }
    }
  }
`

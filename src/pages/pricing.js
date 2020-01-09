import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import PricesList from "../components/pricesList"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { ContentContainer, VerticalSpace } from "../styled-components/layout"
import TripleImage from '../components/tripleImage'
import Quote from '../components/quote'

class PricingPage extends React.Component {
  render() {
    const { data } = this.props
    const prices = data.allContentfulPrice.edges
    const page = data.allContentfulPage.edges[0].node

    return (
      <Layout>
        <SEO title="Teachers" />
        <ContentContainer>
          <Quote page={page}/>
          <TripleImage page={page} />
          <PricesList prices={prices}></PricesList>
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
          validityPeriod
          price
          punchPassId
          allottedClasses
        }
      }
    }
  }
`

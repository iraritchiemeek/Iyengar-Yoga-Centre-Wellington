import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import PricesList from "../components/pricesList"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { ContentContainer, VerticalSpace } from "../styled-components/layout"

class PricingPage extends React.Component {
  render() {
    const { data } = this.props
    const prices = data.allContentfulPrice.edges

    return (
      <Layout>
        <SEO title="Teachers" />
        <ContentContainer>
          <VerticalSpace space="30px"/>
          <PricesList prices={prices}></PricesList>
        </ContentContainer>
      </Layout>
    )
  }
}

export default PricingPage

export const pageQuery = graphql`
  query {
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

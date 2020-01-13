import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import PricesList from "../components/pricesList"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { ContentContainer, VerticalSpace, FlexContainer, InnerContainer } from "../styled-components/layout"
import TripleImage from '../components/tripleImage'
import Quote from '../components/quote'
import SingleTextColumn from '../components/singleTextColumn'

class PricingPage extends React.Component {
  render() {
    const { data } = this.props
    const prices = data.allContentfulPrice.edges
    const page = data.contentfulPage
    const singleTextColumns = page.singleTextColumns

    return (
      <Layout>
        <SEO title="Pricing" />
        <ContentContainer>
          <InnerContainer>
            <h1>{page.title}</h1>
          </InnerContainer>
          <VerticalSpace space="15px"/>
          <Quote author={page.quote.author} content={page.quote.content.content}/>
          <FlexContainer>
            <PricesList prices={prices}></PricesList>
            {singleTextColumns.map(content => {
              return (
                <SingleTextColumn title={content.title} content={content.content.json}/>
              )
            })}
          </FlexContainer>
        </ContentContainer>
      </Layout>
    )
  }
}

export default PricingPage

export const pageQuery = graphql`
  query {
    contentfulPage(contentful_id: {eq: "5EP3fnkDJJ8k9tZCnvnIy8"}){
      title
      singleTextColumns {
        title
        content {
          json
        }
      }
      quote {
        author
        content {
          content
        }
      }
    }
    allContentfulPrice{
      edges {
        node {
          title
          terms
          validityPeriod
          price
          punchPassId
          allottedClasses
        }
      }
    }
  }
`

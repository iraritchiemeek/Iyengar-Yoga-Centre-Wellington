import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import PricesList from "../components/pricesList"
import SEO from "../components/seo"
import FullWidthImg from "../components/fullWidthImg"
import { ContentContainer, VerticalSpace, FlexContainer, InnerContainer } from "../styled-components/layout"
import Quote from '../components/quote'
import SingleTextColumn from '../components/singleTextColumn'
import { BLOCKS } from '@contentful/rich-text-types';


class PricingPage extends React.Component {
  render() {
    const { data } = this.props
    const prices = data.allContentfulPrice.edges
    const page = data.contentfulPage
    const singleTextColumns = page.singleTextColumns

    const renderTextColumns = () => {
      return (
        singleTextColumns.map(content => {
          console.log(content)
          return (
            <SingleTextColumn title={content.title} content={content.content.json}/>
          )
        })
      )
    }

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
            {renderTextColumns()}
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

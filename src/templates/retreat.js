import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { ContentContainer, VerticalSpace, FlexContainer } from "../styled-components/layout"

class Retreat extends React.Component {
  render() {
    const { data } = this.props
    const retreat = this.props.data.contentfuRetreat

    return (
      <Layout>
        <SEO title="Retreat" />
        <ContentContainer>
          <h1>Test</h1>
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
      tripleColumnText {
        title
        content {
          json
        }
      }
    }
  }
`

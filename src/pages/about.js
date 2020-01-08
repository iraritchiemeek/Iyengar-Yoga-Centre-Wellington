import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import TripleTextColumnPage from "../components/tripleTextColumnPage"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { ContentContainer } from "../styled-components/layout"


class AboutPage extends React.Component {
  render() {
    const { data } = this.props
    const content = data.allContentfulPage.edges[0]

    return (
      <Layout>
        <SEO title="Teachers" />
        <ContentContainer>
          <TripleTextColumnPage content={content}></TripleTextColumnPage>
        </ContentContainer>
      </Layout>
    )
  }
}

export default AboutPage

export const pageQuery = graphql`
  query {
    allContentfulPage(
      filter: {pageId: {eq: "about"}}
    ){
      edges {
        node {
          headerQuote {
            headerQuote
          }
          headerQuoteAuthor
          tripleTextColumnTitle
          tripleTextColumnContent {
            json
          }
        }
      }
    }
  }
`

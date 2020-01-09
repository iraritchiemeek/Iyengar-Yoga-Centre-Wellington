import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import TripleTextColumnPage from "../components/tripleTextColumnPage"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { ContentContainer } from "../styled-components/layout"
import Quote from "../components/quote"

class AboutPage extends React.Component {
  render() {
    const { data } = this.props
    const aboutContent = data.aboutPage.edges[0]
    const iyengarContent = data.iyengarYogaPage.edges[0]

    return (
      <Layout>
        <SEO title="Teachers" />
        <ContentContainer>
          <Quote page={aboutContent.node} />
          <TripleTextColumnPage content={aboutContent}></TripleTextColumnPage>
          <TripleTextColumnPage content={iyengarContent}></TripleTextColumnPage>
        </ContentContainer>
      </Layout>
    )
  }
}

export default AboutPage

export const pageQuery = graphql`
  query {
    aboutPage: allContentfulPage(
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
    iyengarYogaPage: allContentfulPage(
      filter: {pageId: {eq: "iyengarYoga"}}
    ){
      edges {
        node {
          tripleTextColumnTitle
          tripleTextColumnPhotos {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          tripleTextColumnContent {
            json
          }
        }
      }
    }
  }
`

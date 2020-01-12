import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import TripleTextColumn from "../components/tripleTextColumn"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { ContentContainer } from "../styled-components/layout"
import Quote from "../components/quote"

class AboutPage extends React.Component {
  render() {
    const { data } = this.props
    const aboutPage = data.aboutPage

    return (
      <Layout>
        <SEO title="About" />
        <ContentContainer>
          <Quote author={aboutPage.quote.author} content={aboutPage.quote.content.content}/>
          <TripleTextColumn content={aboutPage.tripleTextColumns[0].content} title={aboutPage.tripleTextColumns[0].title}></TripleTextColumn>
        </ContentContainer>
      </Layout>
    )
  }
}

export default AboutPage

export const pageQuery = graphql`
  query {
    aboutPage: contentfulPage(contentful_id: {eq: "3CVGZB1c7gS08gBRNa9P6d"}){
      quote {
        content {
          content
        }
        author
      }
      tripleTextColumns {
        photos {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        title
        content {
          json
        }
      }
    }
  }
`

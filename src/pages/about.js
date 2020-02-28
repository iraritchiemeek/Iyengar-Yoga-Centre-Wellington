import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { ContentContainer, VerticalSpace, InnerContainer, FlexContainer } from "../styled-components/layout"
import Quote from '../components/quote'
import TripleTextColumn from "../components/tripleTextColumn"
import SingleTextColumn from "../components/singleTextColumn"


class Index extends React.Component {
  render() {
    const { data } = this.props
    const page = data.contentfulPage

    const renderTripleTextColumn = () => {
      return (
        page.tripleTextColumns.map(tripleTextColumn => {
          return (
            <TripleTextColumn content={tripleTextColumn.content} title={tripleTextColumn.title}></TripleTextColumn>
          )
        })
      )
    }

    return (
      <Layout>
        <SEO title="Home" />
        <ContentContainer>
          <InnerContainer>
            <h1>About</h1>
            <VerticalSpace space="30px"/>
            <Img fluid={page.image.fluid} />
          </InnerContainer>
          <Quote author={page.quote.author} content={page.quote.content.content}/>
          {renderTripleTextColumn()}
        </ContentContainer>
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    contentfulPage(contentful_id: {eq: "3CVGZB1c7gS08gBRNa9P6d"}){
      title
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      tripleTextColumns {
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
  }
`

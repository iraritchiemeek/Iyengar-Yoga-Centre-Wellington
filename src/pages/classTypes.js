import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import ClassTypesList from "../components/classTypesList"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { ContentContainer } from "../styled-components/layout"
import Quote from "../components/quote"


class ClassTypesPage extends React.Component {
  render() {
    const { data } = this.props
    const classTypes = data.allContentfulClassType.edges
    const page = data.allContentfulPage.edges[0].node

    return (
      <Layout>
        <SEO title="Teachers" />
        <ContentContainer>
          <Quote page={page}/>
          <ClassTypesList classTypes={classTypes} />
        </ContentContainer>
      </Layout>
    )
  }
}

export default ClassTypesPage

export const pageQuery = graphql`
  query {
    allContentfulPage(
      filter: {
        pageId: {eq: "classTypes"}
      }
    ){
      edges {
        node {
            headerQuote {
              headerQuote
            }
            headerQuoteAuthor
        }
      }
    }
    allContentfulClassType {
      edges {
        node {
          longName
          shortName
          description {
            json
          }
        }
      }
    }
  }
`

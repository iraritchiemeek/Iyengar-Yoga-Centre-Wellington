import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import ClassTypesList from "../components/classTypesList"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { ContentContainer } from "../styled-components/layout"


class ClassTypesPage extends React.Component {
  render() {
    const { data } = this.props
    const classTypes = data.allContentfulClassType.edges

    return (
      <Layout>
        <SEO title="Teachers" />
        <ContentContainer>
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
        pageId: {eq: "teachers"}
      }
    ){
      edges {
        node {
            headerQuote {
              headerQuote
            }
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

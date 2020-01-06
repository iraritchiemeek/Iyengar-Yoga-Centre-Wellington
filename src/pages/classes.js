import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import TeachersList from "../components/teachersList"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { ContentContainer } from "../styled-components/layout"


class ClassesPage extends React.Component {
  render() {
    const { data } = this.props
    const classes = data.allContentfulClass.edges
    const pageImage = data.allContentfulPage.edges[0].node.image.fluid

    return (
      <Layout>
        <SEO title="Teachers" />

        <Img fluid={pageImage} objectFit="cover"/>
      </Layout>
    )
  }
}

export default ClassesPage

export const pageQuery = graphql`
  query {
    allContentfulPage(
      filter: {pageId: {eq: "classes"}}
    ){
      edges {
        node {
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
    allContentfulClass(
      sort: {fields: [startTime] order: ASC}
    ){
      edges {
        node {
          startTime
          teacher {
            name
          }
          classLevel {
            longName
          }
        }
      }
    }
  }
`

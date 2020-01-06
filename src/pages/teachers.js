import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import TeachersList from "../components/teachersList"
import SEO from "../components/seo"
import Img from "gatsby-image"


class TeachersPage extends React.Component {
  render() {
    const { data } = this.props
    const teachers = data.allContentfulTeacher.edges
    const pageImage = data.allContentfulPage.edges[0].node.image.fluid

    return (
      <Layout>
        <SEO title="Teachers" />
        <Img fluid={pageImage}/>
        {/* <TeachersList teachers={teachers}></TeachersList> */}
      </Layout>
    )
  }
}

export default TeachersPage

export const pageQuery = graphql`
  query {
    allContentfulPage(
      filter: {pageId: {eq: "home"}}
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
    allContentfulTeacher {
      edges {
        node {
          name
          description {
            json
          }
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

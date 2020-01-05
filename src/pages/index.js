import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import TeachersList from "../components/teachersList"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const teachers = data.allContentfulTeacher.edges

    return (
      <Layout>
        <SEO title="Home" />
        <TeachersList teachers={teachers}></TeachersList>
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query {
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

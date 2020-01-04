import React from "react"
import { Link } from "gatsby"
import TeachersList from "../components/teachersList"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const teachers = data.allContentfulTeacher.edges

    return (
      <div>
        <SEO title="Home" />
        <TeachersList teachers={teachers}></TeachersList>
      </div>
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
            description
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

import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import TeachersList from "../components/teachersList"
import SEO from "../components/seo"
import Img from "gatsby-image"

class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const image = data.allContentfulPage.edges[0].node.image.fluid

    return (
      <Layout>
        <SEO title="Home" />
        <Img fluid={image} objectFit="cover"></Img>
      </Layout>
    )
  }
}

export default IndexPage

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
  }
`

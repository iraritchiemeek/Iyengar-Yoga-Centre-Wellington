import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import TeachersList from "../components/teachersList"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { ContentContainer, VerticalSpace } from "../styled-components/layout"
import Quote from "../components/quote"


class TeachersPage extends React.Component {
  render() {
    const { data } = this.props
    const teachers = data.allContentfulTeacher.edges
    const page = data.allContentfulPage.edges[0].node

    return (
      <Layout>
        <SEO title="Teachers" />
        <ContentContainer>
          <Quote page={page} />
          <VerticalSpace space="30px"/>
          <TeachersList teachers={teachers}></TeachersList>
        </ContentContainer>
      </Layout>
    )
  }
}

export default TeachersPage

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
    allContentfulTeacher(
      sort: {
        fields: [mainTeacher]
        order: DESC
      }
      ){
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
          mainTeacher
        }
      }
    }
  }
`

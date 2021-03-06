import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import TeachersList from "../components/teachersList"
import SEO from "../components/seo"
import { ContentContainer, VerticalSpace, InnerContainer } from "../styled-components/layout"
import Quote from "../components/quote"


class TeachersPage extends React.Component {
  render() {
    const { data } = this.props
    const teachers = data.allContentfulTeacher.edges
    const page = data.contentfulPage

    return (
      <Layout>
        <SEO title="Teachers" />
        <ContentContainer>
          <InnerContainer>
            <h1>{page.title}</h1>
          </InnerContainer>
          <VerticalSpace space="15px"/>
          <Quote content={page.quote.content.content} />
          <VerticalSpace space="15px"/>
          <TeachersList teachers={teachers}></TeachersList>
        </ContentContainer>
      </Layout>
    )
  }
}

export default TeachersPage

export const pageQuery = graphql`
  query {
    contentfulPage(contentful_id: {eq: "27j8KPTIxGr0T67x3Cnyj"}){
      title
      quote {
        content {
          content
        }
      }
    }
    allContentfulTeacher(
      sort: {
        fields: [order]
        order: ASC
      }
    ){
      edges {
        node {
          order
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

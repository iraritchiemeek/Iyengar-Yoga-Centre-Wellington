import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { ContentContainer, VerticalSpace } from "../styled-components/layout"
import Timetable from "../components/timetable"
import Quote from '../components/quote'


class Index extends React.Component {
  render() {
    const { data } = this.props
    const classes = data.allContentfulClass.edges
    const page = data.contentfulPage

    return (
      <Layout>
        <SEO title="Home" />
        <ContentContainer>
          <Quote author={page.quote.author} content={page.quote.content.content}/>
          <Timetable classes={classes} /> 
        </ContentContainer>
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    contentfulPage(contentful_id: {eq: "5Rmbm3BYGzBDz42G0IAW2z"}){
      title
      quote {
        author
        content {
          content
        }
      }
    }
    allContentfulClass(
      sort: {fields: [startTime] order: ASC}
    ){
      edges {
        node {
          title
          startTime
          endTime
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

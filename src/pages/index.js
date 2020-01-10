import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import TripleTextColumnPage from "../components/tripleTextColumnPage"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { ContentContainer, VerticalSpace } from "../styled-components/layout"
import Timetable from "../components/timetable"
import Quote from '../components/quote'


class Index extends React.Component {
  render() {
    const { data } = this.props
    const classes = data.allContentfulClass.edges
    const page = data.allContentfulPage.edges[0].node

    return (
      <Layout>
        <SEO title="Home" />
        <ContentContainer>
          <Quote page={page}/>
          <Timetable classes={classes} /> 
        </ContentContainer>
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    allContentfulPage(
      filter: {pageId: {eq: "home"}}
    ){
      edges {
        node {
          title
          headerQuote {
            headerQuote
          }
          headerQuoteAuthor
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

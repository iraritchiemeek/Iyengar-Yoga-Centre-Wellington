import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Timetable from "../components/timetable"
import SEO from "../components/seo"
import FullWidthImg from "../components/fullWidthImg"
import Quote from '../components/quote'
import { FlexContainer, FlexItem, ContentContainer, InnerContainer, VerticalSpace } from "../styled-components/layout"

class TimetablePage extends React.Component {
  render() {
    const { data } = this.props
    const classes = data.allContentfulClass.edges
    const pageImage = data.contentfulPage.image

    return (
      <Layout>
        <SEO title="Classes" />
        <ContentContainer>
          <InnerContainer>
            <h1>{data.contentfulPage.title}</h1>
            <VerticalSpace space="30px"/>
           {/* <FullWidthImg fluid={pageImage.fluid} /> */}
          </InnerContainer>
          {/* <Quote author={data.contentfulPage.quote.author} content={data.contentfulPage.quote.content.content}/> */}
          <iframe name="frame2" src="https://wellingtonyoga.punchpass.com/calendar?embed=true" height="700" width="100%" frameborder="0"></iframe>
        </ContentContainer>
      </Layout>
    )
  }
}

export default TimetablePage 

export const pageQuery = graphql`
  query {
    contentfulPage(contentful_id: {eq: "1JjlWGljFFf4F1DyC3dM0K"}){
      title
      quote {
        author
        content {
          content
        }
      }
      image {
        fluid {
          ...GatsbyContentfulFluid
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
            firstName
          }
          classLevel {
            longName
            shortName
          }
        }
      }
    }
  }
`

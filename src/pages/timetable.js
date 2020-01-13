import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Timetable from "../components/timetable"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { FlexContainer, FlexItem, ContentContainer } from "../styled-components/layout"



class TimetablePage extends React.Component {
  render() {
    const { data } = this.props
    const classes = data.allContentfulClass.edges
    const pageImage = data.contentfulPage.image

    return (
      <Layout>
        <SEO title="Classes" />
        <ContentContainer>
          <Timetable classes={classes} /> 
          <FlexContainer>
            <FlexItem fullWidth >
              <Img fluid={pageImage} objectFit="cover"/>
            </FlexItem>
          </FlexContainer>
        </ContentContainer>
      </Layout>
    )
  }
}

export default TimetablePage

export const pageQuery = graphql`
  query {
    contentfulPage(contentful_id: {eq: "1JjlWGljFFf4F1DyC3dM0K"}){
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

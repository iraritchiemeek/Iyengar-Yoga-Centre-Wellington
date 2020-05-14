import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FullWidthImg from "../components/fullWidthImg"
import { ContentContainer, FlexContainer, InnerContainer, VerticalSpace } from "../styled-components/layout"
import Quote from "../components/quote"
import SingleTextColumn from '../components/singleTextColumn'
import TripleTextColumn from "../components/tripleTextColumn"



class newStudentsPage extends React.Component {
  render() {
    const { data } = this.props
    const page = data.contentfulPage
    const newStudentText = page.tripleTextColumns[0]
    const begginerCourseText = page.tripleTextColumns[1]
    const bannerImage = data.bannerImage

    return (
      <Layout>
        <SEO title="Class Types" />
        <ContentContainer>
          <InnerContainer>
            <h1>New Students</h1>
            <VerticalSpace space="30px"/>
            <FullWidthImg fluid={bannerImage.fluid} />
          </InnerContainer>
          <VerticalSpace space="15px"/>
          <FlexContainer>
            <TripleTextColumn content={[begginerCourseText.column1, begginerCourseText.column2, begginerCourseText.column3]} title={begginerCourseText.title} ></TripleTextColumn>
            <TripleTextColumn content={[newStudentText.column1, newStudentText.column2, newStudentText.column3]} title={newStudentText.title} ></TripleTextColumn>
          </FlexContainer>
        </ContentContainer>
      </Layout>
    )
  }
}

export default newStudentsPage

export const pageQuery = graphql`
  query {
    bannerImage: contentfulAsset(contentful_id: {eq: "26HV1n2gSuUcwOB499SjcV"}) {
      fluid {
        ...GatsbyContentfulFluid
      }
    }
    contentfulPage(contentful_id: {eq: "24GOqYDwtQVqrMCVAZrzfS"}){
      title
      quote {
        content {
          content
        }
      }
      tripleTextColumns {
        title
        column1 {
          json
        }
        column2 {
          json
        }
        column3 {
          json
        }
      }
    }
  }
`

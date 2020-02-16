import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { ContentContainer, FlexContainer, InnerContainer, VerticalSpace } from "../styled-components/layout"
import Quote from "../components/quote"
import SingleTextColumn from '../components/singleTextColumn'
import TripleTextColumn from "../components/tripleTextColumn"



class newStudentsPage extends React.Component {
  render() {
    const { data } = this.props
    const classTypes = data.allContentfulClassType.edges
    const page = data.contentfulPage
    const newStudentText = page.tripleTextColumns[0]
    const begginerCourseText = page.tripleTextColumns[1]

    return (
      <Layout>
        <SEO title="Class Types" />
        <ContentContainer>
          <Quote content={page.quote.content.content}/>
          <VerticalSpace space="15px"/>
          <InnerContainer>
            <h1>New Students</h1>
          </InnerContainer>
          <FlexContainer>
            <TripleTextColumn content={newStudentText.content} ></TripleTextColumn>
            {classTypes.map(classType => {
              return (
                <SingleTextColumn title={classType.node.longName} content={classType.node.description.json} />
              )
            })}
          </FlexContainer>
          <VerticalSpace space="15px"/>
          <InnerContainer>
            <h1>Begginer Courses</h1>
          </InnerContainer>
          <FlexContainer>
            <TripleTextColumn content={begginerCourseText.content} ></TripleTextColumn>
          </FlexContainer>

        </ContentContainer>
      </Layout>
    )
  }
}

export default newStudentsPage

export const pageQuery = graphql`
  query {
    contentfulPage(contentful_id: {eq: "24GOqYDwtQVqrMCVAZrzfS"}){
      title
      quote {
        content {
          content
        }
      }
      tripleTextColumns {
        content {
          json
        }
      }
    }

    allContentfulClassType(
      sort: {
        fields: [order]
        order: ASC
      }
    ){
      edges {
        node {
          longName
          shortName
          description {
            json
          }
        }
      }
    }
  }
`

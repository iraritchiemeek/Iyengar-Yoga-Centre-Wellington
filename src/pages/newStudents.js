import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { ContentContainer, FlexContainer, InnerContainer } from "../styled-components/layout"
import Quote from "../components/quote"
import SingleTextColumn from '../components/singleTextColumn'
import TripleTextColumn from "../components/tripleTextColumn"



class newStudentsPage extends React.Component {
  render() {
    const { data } = this.props
    const classTypes = data.allContentfulClassType.edges
    const page = data.contentfulPage

    console.log(data)

    return (
      <Layout>
        <SEO title="Class Types" />
        <ContentContainer>
          <InnerContainer>
            <h1>New Students</h1>
          </InnerContainer>
          <FlexContainer>
            {
              page.tripleTextColumns.map(tripleTextColumn => {
                return (
                  <TripleTextColumn content={tripleTextColumn.content} ></TripleTextColumn>
                )
              })
            }
            {classTypes.map(classType => {
              return (
                <SingleTextColumn title={classType.node.longName} content={classType.node.description.json} />
              )
            })}
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

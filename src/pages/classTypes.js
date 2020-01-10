import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { ContentContainer, FlexContainer } from "../styled-components/layout"
import Quote from "../components/quote"
import SingleTextColumn from '../components/singleTextColumn'



class ClassTypesPage extends React.Component {
  render() {
    const { data } = this.props
    const classTypes = data.allContentfulClassType.edges
    const page = data.allContentfulPage.edges[0].node
    console.log(classTypes)
    return (
      <Layout>
        <SEO title="Teachers" />
        <ContentContainer>
          <Quote page={page}/>
          <FlexContainer>
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

export default ClassTypesPage

export const pageQuery = graphql`
  query {
    allContentfulPage(
      filter: {
        pageId: {eq: "classTypes"}
      }
    ){
      edges {
        node {
            headerQuote {
              headerQuote
            }
            headerQuoteAuthor
        }
      }
    }
    allContentfulClassType {
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

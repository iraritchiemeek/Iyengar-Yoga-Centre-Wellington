import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { ContentContainer, FlexContainer, InnerContainer } from "../styled-components/layout"
import Quote from "../components/quote"
import SingleTextColumn from '../components/singleTextColumn'



class newStudentsPage extends React.Component {
  render() {
    const { data } = this.props
    const classTypes = data.allContentfulClassType.edges
    console.log(classTypes)
    return (
      <Layout>
        <SEO title="Class Types" />
        <ContentContainer>
          <InnerContainer>
            <h1>Class Levels</h1>
          </InnerContainer>
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

export default newStudentsPage

export const pageQuery = graphql`
  query {
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

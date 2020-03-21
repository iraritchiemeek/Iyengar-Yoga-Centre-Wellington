import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FullWidthImg from "../components/fullWidthImg"
import { ContentContainer, VerticalSpace, InnerContainer, FlexContainer } from "../styled-components/layout"
import Quote from '../components/quote'
import TripleTextColumn from "../components/tripleTextColumn"
import SingleTextColumn from "../components/singleTextColumn"


class ClassLevels extends React.Component {
  render() {
    const { data } = this.props
    const page = data.contentfulPage
    const classTypes = data.allContentfulClassType.edges

    const renderTripleTextColumn = () => {
      if (page.tripleTextColumns) {
        return (
          page.tripleTextColumns.map(tripleTextColumn => {
            return (
              <TripleTextColumn content={tripleTextColumn.content} title={tripleTextColumn.title}></TripleTextColumn>
            )
          })
        )
      }
    }

    const renderQuote = () => page.quote ? <Quote author={page.quote.author} content={page.quote.content.content}/> : null

    return (
      <Layout>
        <SEO title="Home" />
        <ContentContainer>
          <InnerContainer>
            <h1>Class Levels</h1>
            <VerticalSpace space="30px"/>
            <FullWidthImg fluid={page.image.fluid} />
          </InnerContainer>
          {renderQuote()}
          {renderTripleTextColumn()}
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

export default ClassLevels

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
    contentfulPage(contentful_id: {eq: "2YqZrgz26PjdcOOYFP39Cu"}){
      title
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      tripleTextColumns {
        title
        content {
          json
        }
      }
      quote {
        author
        content {
          content
        }
      }
    }
  }
`

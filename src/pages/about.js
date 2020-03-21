import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FullWidthImg from "../components/fullWidthImg"
import { ContentContainer, VerticalSpace, InnerContainer, FlexContainer } from "../styled-components/layout"
import Quote from '../components/quote'
import TripleTextColumn from "../components/tripleTextColumn"
import SingleTextColumn from "../components/singleTextColumn"


class About extends React.Component {
  render() {
    const { data } = this.props
    const page = data.contentfulPage

    const renderTripleTextColumn = () => {
      return (
        page.tripleTextColumns.map(tripleTextColumn => {
          return (
            <TripleTextColumn content={[tripleTextColumn.column1, tripleTextColumn.column2, tripleTextColumn.column3]} title={tripleTextColumn.title}></TripleTextColumn>
          )
        })
      )
    }

    return (
      <Layout>
        <SEO title="Home" />
        <ContentContainer>
          <InnerContainer>
            <h1>About</h1>
            <VerticalSpace space="30px"/>
            <FullWidthImg fluid={page.image.fluid} />
          </InnerContainer>
          <Quote author={page.quote.author} content={page.quote.content.content}/>
          {renderTripleTextColumn()}
        </ContentContainer>
      </Layout>
    )
  }
}

export default About

export const pageQuery = graphql`
  query {
    contentfulPage(contentful_id: {eq: "3CVGZB1c7gS08gBRNa9P6d"}){
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
      quote {
        author
        content {
          content
        }
      }
    }
  }
`

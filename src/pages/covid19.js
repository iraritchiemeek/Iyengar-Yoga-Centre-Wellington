import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FullWidthImg from "../components/fullWidthImg"
import { ContentContainer, VerticalSpace, InnerContainer, FlexContainer } from "../styled-components/layout"
import Quote from '../components/quote'
import SingleTextColumn from "../components/singleTextColumn"


class About extends React.Component {
  render() {
    const { data } = this.props
    const page = data.contentfulPage
    const singleTextColumns = page.singleTextColumns

    const renderTextColumns = () => {
      return (
        singleTextColumns.map(content => {
          return (
            <SingleTextColumn title={content.title} content={content.content.json}/>
          )
        })
      )
    }

    return (
      <Layout>
        <SEO title="Covid 19" />
        <ContentContainer>
          <InnerContainer>
            <h1>COVID-19 Notice</h1>
            <VerticalSpace space="30px"/>
            <FullWidthImg fluid={page.image.fluid} />
          </InnerContainer>
          <Quote author={page.quote.author} content={page.quote.content.content}/>
          <FlexContainer>
            {renderTextColumns()}
          </FlexContainer>
        </ContentContainer>
      </Layout>
    )
  }
}

export default About

export const pageQuery = graphql`
  query {
    contentfulPage(contentful_id: {eq: "8i6fjJeHqoKTqRonw3DSX"}){
      title
      singleTextColumns {
        title
        content {
          json
        }
      }
      image {
        fluid {
          ...GatsbyContentfulFluid
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

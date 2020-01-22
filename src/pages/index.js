import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { ContentContainer, VerticalSpace, InnerContainer } from "../styled-components/layout"
import Quote from '../components/quote'
import TripleTextColumn from "../components/tripleTextColumn"


class Index extends React.Component {
  render() {
    const { data } = this.props
    const page = data.contentfulPage
    const notices = data.allContentfulNotice
    const slug = title => title.replace(/\s/g, '-').toLowerCase()


    return (
      <Layout>
        <SEO title="Home" />
        <ContentContainer>
          <VerticalSpace space="20px"/>
          <Quote author={page.quote.author} content={page.quote.content.content}/>
          {
            page.tripleTextColumns.map(tripleTextColumn => {
              return (
                <TripleTextColumn images={tripleTextColumn.photos} content={tripleTextColumn.content} title={tripleTextColumn.title}></TripleTextColumn>
              )
            })
          }
        </ContentContainer>
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    allContentfulNotice {
      edges {
        node {
          priority
          content {
            __typename ... on ContentfulRetreat {
              title
              startDate
              endDate
              mainPhoto {
                fluid {
                  ...GatsbyContentfulFluid
                }
              }
            }
            __typename ... on ContentfulSingleColumnText {
              title
              image {
                fluid {
                  ...GatsbyContentfulFluid
                }
              }
              content {
                json
              }
            }
          }
        }
      }
    }
    contentfulPage(contentful_id: {eq: "5Rmbm3BYGzBDz42G0IAW2z"}){
      title
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      tripleTextColumns {
        photos {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
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

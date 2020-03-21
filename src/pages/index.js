import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FullWidthImg from "../components/fullWidthImg"
import { ContentContainer, VerticalSpace, InnerContainer, FlexContainer } from "../styled-components/layout"
import Quote from '../components/quote'
import TripleTextColumn from "../components/tripleTextColumn"
import SingleTextColumn from "../components/singleTextColumn"
import RetreatListItem from "../components/retreatListItem"
import WorkshopListItem from "../components/workshopListItem"


class Index extends React.Component {
  render() {
    const { data } = this.props
    const page = data.contentfulPage
    const notices = data.allContentfulNotice.edges
    const slug = title => title.replace(/\s/g, '-').toLowerCase()
    const bannerImage = page.image

    const renderNotices = () => {
      return (
        notices.map(notice => {
          const noticeContent = notice.node.content
          const notice_type = noticeContent.__typename
          if (notice_type == 'ContentfulSingleColumnText') {
            return <SingleTextColumn image={noticeContent.image}  title={notice.node.title} content={noticeContent.content.json} />
          } else if (notice_type == 'ContentfulWorkshop') {
            return <WorkshopListItem workshop={noticeContent} title={notice.node.title} /> 
          } else if (notice_type === 'ContentfulRetreat') {
            return <RetreatListItem retreat={noticeContent} title={notice.node.title} /> 
          }
        })
      )
    }


    return (
      <Layout>
        <SEO title="Home" />
        <ContentContainer>
          <InnerContainer>
            <h1>Wellington Yoga</h1>
            <VerticalSpace space="30px"/>
            <FullWidthImg fluid={bannerImage.fluid} />
          </InnerContainer>
          <Quote author={page.quote.author} content={page.quote.content.content}/>
          <FlexContainer>
            {renderNotices()}
          </FlexContainer>
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
          title
          priority
          content {
            __typename ... on ContentfulRetreat {
              title
              description {
                json
              }
              startDate
              endDate
              mainPhoto {
                fluid {
                  ...GatsbyContentfulFluid
                }
              }
            }
            __typename ... on ContentfulWorkshop {
              title
              image {
                fluid {
                  ...GatsbyContentfulFluid
                }
              }
              startDate
              endDate
              description {
                json
              }
              price
              punchPassId
              teacher {
                name
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

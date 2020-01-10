import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { ContentContainer, VerticalSpace, FlexContainer } from "../styled-components/layout"
import TripleTextColumn from "../components/tripleTextColumn"

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

class Retreat extends React.Component {
  render() {
    const { data } = this.props
    const retreat = this.props.data.contentfulRetreat
    const startDate = new Date(retreat.startDate).getDate()
    const startMonth = monthNames[new Date(retreat.startDate).getMonth()]
    const endMonth = monthNames[new Date(retreat.endDate).getMonth()]
    const endDate = new Date(retreat.endDate).getDate()
    const year = new Date(retreat.startDate).getFullYear()

    return (
      <Layout>
        <SEO title="Retreat" />
        <ContentContainer>
          <Img fluid={retreat.mainPhoto.fluid} />
          <h1>{retreat.title} {year}</h1>
          <h2>{startDate} {startMonth} - {endDate} {endMonth}</h2>
          <TripleTextColumn content={retreat.tripleColumnText} />
        </ContentContainer>
      </Layout>
    )
  }
}

export default Retreat

export const pageQuery = graphql`
  query ContentfulRetreatByTitle($title: String!) {
    contentfulRetreat( title: {eq: $title}) {
      title
      startDate
      endDate
      mainPhoto {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      tripleColumnText {
        title
        content {
          json
        }
      }
    }
  }
`

import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import WorkshopsList from "../components/workshopsList"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { ContentContainer, VerticalSpace, FlexContainer } from "../styled-components/layout"
import TripleImage from '../components/tripleImage'
import Quote from '../components/quote'
import SingleTextColumn from '../components/singleTextColumn'

class PricingPage extends React.Component {
  render() {
    const { data } = this.props
    const workshops = data.allContentfulWorkshop.edges

    return (
      <Layout>
        <SEO title="Workshops" />
        <ContentContainer>
          <WorkshopsList workshops={workshops}></WorkshopsList>
        </ContentContainer>
      </Layout>
    )
  }
}

export default PricingPage

export const pageQuery = graphql`
  query {
    allContentfulWorkshop{
      edges {
        node {
          title
          startDate
          endDate
          description {
            json
          }
          full
          price
          punchPassId
          teacher {
            name
          }  
        }
      }
    }
  }
`





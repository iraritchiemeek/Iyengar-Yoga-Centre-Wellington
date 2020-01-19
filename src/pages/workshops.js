import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { ContentContainer, FlexContainer, FlexItem, InnerContainer, VerticalSpace, Button } from "../styled-components/layout"
import { NoSpaceP } from "../styled-components/text"
import Quote from "../components/quote"
import SingleTextColumn from '../components/singleTextColumn'

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

class WorkshopsPage extends React.Component {
  render() {
    const { data } = this.props
    const workshops = data.allContentfulWorkshop.edges

    return (
      <Layout>
        <SEO title="Workshops" />
        <ContentContainer>
          
        </ContentContainer>
      </Layout>
    )
  }
}

export default WorkshopsPage

export const pageQuery = graphql`
  query {
    allContentfulWorkshop {
      edges {
        node {
          startDate
          endDate
          title
          description {
            json
          }
          full
          price
          teacher {
            name
          }
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          } 
        }
      }
    }
  }
`

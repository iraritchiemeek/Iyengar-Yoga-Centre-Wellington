import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Timetable from "../components/timetable"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { FlexContainer, FlexItem, ContentContainer, InnerContainer } from "../styled-components/layout"

class ContactPage extends React.Component {
  render() {

    return (
      <Layout>
        <SEO title="Classes" />
        <ContentContainer>
          <InnerContainer>
            <h1>Contact</h1>
            <VerticalSpace space="60px"/>
            <a href="mailto: tessa@wellingtonyoga.co.nz"><h2 style={{textAlign: 'center'}}>tessa@wellingtonyoga.co.nz</h2></a>
          </InnerContainer>
        </ContentContainer>
      </Layout>
    )
  }
}

export default ContactPage

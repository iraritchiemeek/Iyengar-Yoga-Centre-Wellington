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
          </InnerContainer>
          <form action="https://getform.io/f/b0a84408-a83e-4362-a9f2-885a154555f5" method="POST">
            <label>
              Email
              <input type="email" name="email" />
            </label>
            <label>
              Name
              <input type="text" name="name" />
            </label>
            <label>
              Message
              <input type="text" name="message" />
            </label>
            <button type="submit">Send</button>
          </form>  
        </ContentContainer>
      </Layout>
    )
  }
}

export default ContactPage

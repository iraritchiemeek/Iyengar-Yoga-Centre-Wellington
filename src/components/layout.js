import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import { createGlobalStyle } from "styled-components"
import { colors } from "../styled-components/variables"

const GlobalStyle = createGlobalStyle`
  body, p {
    font-family: 'Open Sans';
    color: ${colors.offBlack};
    font-size: 13px;
  }

  h2 {
    font-weight: 400;
    font-size: 20px;
    margin: 1.2em 0 0.8em 0;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <Header siteTitle={data.site.siteMetadata.title} />
      <GlobalStyle />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          © Copyright Tessa Meek {new Date().getFullYear()}. All rights reserved.
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
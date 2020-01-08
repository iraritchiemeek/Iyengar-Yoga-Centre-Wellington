import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import { createGlobalStyle } from "styled-components"
import { color } from "../styled-components/variables"

const GlobalStyle = createGlobalStyle`
  body, html {
    width: 100%;
    height: 100%;
    margin: 0;
    font-family: 'Open Sans', sans-serif;
  } 
  header {
    padding: 0 30px;
    box-sizing: border-box;
    background-color: ${color.lightBlue};
    border-bottom: 1px solid #eaeaea;
    nav {
      padding: 8px 0;
    }
  }
  a, a:active, a:visited {
    color: black;
    text-decoration: none;
  }
  a:hover {
    color: ${color.lightBlue};
  }
  p {
    color: ${color.offBlack};
    font-size: 13px;
    letter-spacing: 0.01em;
    line-height: 1.7em;
    margin: 0 0 1.2em 0;
  }

  h2 {
    font-weight: 400;
    font-size: 20px;
    margin: 1.2em 0 0.8em 0;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAsset(
        filter: {contentful_id: {eq: "3dyUjNdyFt9Crq2QB91lx3"}}
      ){
        edges {
          node {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <Header siteTitle={data.site.siteMetadata.title} logo={data.allContentfulAsset.edges[0].node.fluid} />
      <GlobalStyle />
      <main>{children}</main>
        {/* <footer>
          © Copyright Tessa Meek {new Date().getFullYear()}. All rights reserved.
        </footer>*/}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
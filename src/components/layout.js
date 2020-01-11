import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import { createGlobalStyle } from "styled-components"
import { color, spacing } from "../styled-components/variables"
import { VerticalSpace } from '../styled-components/layout'

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
    box-shadow: inset 0 -1px 0 0px rgba(0, 0, 0, 0.1);
    nav {
      padding: 8px 0;
      max-width: ${spacing.maxContentWidth};
      margin: 0 auto;
    }
  }
  a {
    color: black;
    text-decoration: none;
    transition: color 0.1s ease-out;
  }
  a:active, a:visited {
    color: default;
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
  h1 {
    font-size: 50px;
    font-weight: bold;
    color: ${color.lightBlue};
    margin: 0;
  }
  h2 {
    font-weight: 400;
    font-size: 25px;
    margin: 1em 0 0 0;
    color: ${color.lightBlue};
  }
  h3 {
    font-weight: 400;
    font-size: 18px;
    margin: 1em 0 0.6em 0;
    color: black;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAsset(
        filter: {contentful_id: {eq: "3TEuRazbQ8KcmQh3AfugSq"}}
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
      <VerticalSpace />
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
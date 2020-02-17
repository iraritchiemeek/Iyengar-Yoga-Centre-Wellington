import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import { createGlobalStyle } from "styled-components"
import { color, spacing, device } from "../styled-components/variables"
import { VerticalSpace } from '../styled-components/layout'
import "typeface-open-sans"
import "typeface-muli"

const GlobalStyle = createGlobalStyle`
  body, html {
    width: 100%;
    height: 100%;
    margin: 0;
    font-family: 'Muli', sans-serif;
    font-weight: 300;
    max-width: 100%;
    box-sizing: border-box;
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
    font-size: 20px;
    letter-spacing: 0.01em;
    margin: 0 0 1.2em 0;
  }
  h1, h2, h3, p {
    text-align: center;
    color: ${color.offBlack};
    line-height: 32px;
    @media ${device.tablet} {
      text-align: left;
    }
  }
  h1 {
    font-size: 58px;
    font-weight: 300;
    margin: 0;
    color: ${color.lightBlue};
  }
  h2 {
    font-size: 25px;
    margin: 0 0 0 0;
    font-weight: 400;
    margin-bottom: 25px;
  }
  h3 {
    font-size: 18px;
    margin: 0 0 0.6em 0;
    color: black;
    font-weight: 300;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      logo: allContentfulAsset(
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
    <React.Fragment>
      <Header siteTitle={data.site.siteMetadata.title} logo={data.logo.edges[0].node.fluid} />
      <GlobalStyle />
      <main>{children}</main>
      <VerticalSpace />
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
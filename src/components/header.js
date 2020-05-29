import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { NavList, NavItem, Logo, StyledHeader, Hamburger, HamburgerBox, HamburgerInner, Banner, InnerContainer, ContentContainer} from "../styled-components/layout"
import Img from "gatsby-image"
import { Location } from '@reach/router'


function Header({ siteTitle, logo, location }) {

  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const path = typeof window !== 'undefined' ? window.location.pathname : '';

  const renderCovidBanner = () => {
    if (!path.includes("timetable")) {
      return (
        <Link to="/timetable/"><Banner>
            <InnerContainer>
              <p>View Timetable</p>
            </InnerContainer>
        </Banner></Link>
      )
    }
  }

  return (
    <React.Fragment>
      <StyledHeader>
        <NavList open={hamburgerOpen}>
          <NavItem><Link activeClassName="active" to="/about/">About</Link></NavItem>
          <NavItem><Link activeClassName="active" to="/timetable/">Timetable</Link></NavItem>
          <NavItem><Link activeClassName="active" to="/classLevels/">Class Levels</Link></NavItem>
          <NavItem><Link activeClassName="active" to="/newStudents/">New Students</Link></NavItem>
          <NavItem><Link activeClassName="active" to="/retreats/">Retreats</Link></NavItem>
          <NavItem><Link activeClassName="active" to="/teachers/">Teachers</Link></NavItem>
          <NavItem><Link activeClassName="active" to="/pricing/">Pricing</Link></NavItem>
    			<NavItem><Link activeClassName="active" to="/contact/">Contact</Link></NavItem>
    	  </NavList>
        <Logo><Link to="//"><Img fluid={logo}>About</Img></Link></Logo>
        <Hamburger onClick={() => setHamburgerOpen(!hamburgerOpen)}>
          <HamburgerBox>
            <HamburgerInner open={hamburgerOpen}/>
          </HamburgerBox>
        </Hamburger>
      </StyledHeader>

      {renderCovidBanner()}
    </React.Fragment>

  )

}

export default Header
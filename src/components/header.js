import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { NavList, NavItem, Logo, StyledHeader, Hamburger, HamburgerBox, HamburgerInner} from "../styled-components/layout"
import Img from "gatsby-image"


function Header({ siteTitle, logo }) {

  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  return (
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
  )

}

export default Header
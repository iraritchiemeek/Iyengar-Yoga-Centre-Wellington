import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { NavList, NavItem, Logo, StyledHeader} from "../styled-components/layout"
import Img from "gatsby-image"

const Header = ({ siteTitle, logo }) => (
  <StyledHeader>
  	<nav>
  		<NavList>
        <Logo><Link to="//"><Img fluid={logo}>About</Img></Link></Logo>
        <NavItem><Link activeClassName="active" to="/timetable/">Timetable</Link></NavItem>
        <NavItem><Link activeClassName="active" to="/newStudents/">New Students</Link></NavItem>
        <NavItem><Link activeClassName="active" to="/retreats/">Workshops</Link></NavItem>
        <NavItem><Link activeClassName="active" to="/retreats/">Retreats</Link></NavItem>
        <NavItem><Link activeClassName="active" to="/teachers/">Teachers</Link></NavItem>
        <NavItem><Link activeClassName="active" to="/pricing/">Pricing</Link></NavItem>
  			<NavItem><Link activeClassName="active" to="/contact/">Contact</Link></NavItem>
  		</NavList>
  	</nav>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
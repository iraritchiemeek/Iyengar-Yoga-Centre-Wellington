import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { NavList, NavItem , Logo} from "../styled-components/layout"
import Img from "gatsby-image"

const Header = ({ siteTitle, logo }) => (
  <header>
  	<nav>
  		<NavList>
        <Logo><Link to="//"><Img fluid={logo}>About</Img></Link></Logo>
  			<NavItem><Link activeClassName="active" to="/about/">About</Link></NavItem>
  			<NavItem><Link activeClassName="active" to="/teachers/">Teachers</Link></NavItem>
        <NavItem><Link activeClassName="active" to="/timetable/">Timetable</Link></NavItem>
  			<NavItem><Link activeClassName="active" to="/classTypes/">Class Levels</Link></NavItem>
        <NavItem><Link activeClassName="active" to="/retreats/">Retreats</Link></NavItem>
        <NavItem><Link activeClassName="active" to="/pricing/">Pricing</Link></NavItem>
  			<NavItem><Link activeClassName="active" to="/contact/">Contact</Link></NavItem>
  		</NavList>
  	</nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
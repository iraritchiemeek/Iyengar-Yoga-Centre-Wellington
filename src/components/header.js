import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { NavList, NavItem } from "../styled-components/layout"

const Header = ({ siteTitle }) => (
  <header>
  	<nav>
  		<NavList>
  			<NavItem><Link to="/about/">About</Link></NavItem>
  			<NavItem><Link to="/teachers/">Teachers</Link></NavItem>
        <NavItem><Link to="/timetable/">Timetable</Link></NavItem>
  			<NavItem><Link to="/classes/">Classes</Link></NavItem>
  			<NavItem><Link to="/retrears/">Retreats</Link></NavItem>
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
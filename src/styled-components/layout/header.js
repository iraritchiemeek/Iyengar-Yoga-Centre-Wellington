import styled from 'styled-components'
import { color, device, spacing }  from '../variables.js';

export const StyledHeader = styled.header`
	max-width: 100rem;
	padding: .5rem 5rem;
`

export const Logo = styled.div`
	cursor: pointer;
	font-weight: 400;
	font-size: 1.5rem;
	display: inline-block;
	border-top: 5px solid ${color.lightBlue};
`







export const NavList = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
	flex-wrap: wrap;
	background-color: white;
	height: 100%;
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	display: ${props => props.open ? `block` : `none`};
	padding-top: 115px;
	z-index: 1;
`

export const NavItem = styled.li`
	max-width: 100%;
	@media ${device.tablet} {
		flex: 1;
	}
	padding: .8em;
	text-align: center;
	a, a:visited, a:active {
		font-size: 30px;
		font-weight: bold;
		color: ${color.lightBlue};
		
	}
	a:hover, a.active {
		text-decoration: underline;
	}
`

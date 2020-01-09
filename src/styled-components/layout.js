import styled from 'styled-components'
import { color, device, spacing }  from './variables.js';

export const NavList = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
	display: flex;
`

export const NavItem = styled.li`
	padding: .8em;
	text-align: center;
	flex: 1;
	a, a:visited, a:active {
		font-size: 16px;
		color: ${color.lightGrey};
		text-decoration: none;
		transition: color 0.1s ease-out;
	}
	a:hover {
		color: black;
	}
`

export const Logo = styled.div`
	cursor: pointer;
	padding: .8em;
	width: 15px;
`

export const ContentContainer = styled.section`
	padding: 2em 0;
	max-width: ${spacing.maxContentWidth};
    margin: auto;
    box-sizing: border-box;
`

export const FlexContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
`

export const FlexItem = styled.div`
	width: 100%;
	@media ${device.tablet} {
		width: ${props => props.width || "100%"};
		padding: 1.1em ${spacing.betweenItemSpace}em;
		box-sizing: border-box;
	}
	h2 {
		color: ${color.lightBlue};
	}
`

export const VerticalList = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
`

export const VerticalListItem = styled.li`
	padding: 0 0 ${spacing.betweenItemSpace}em 0;
`

export const TripleColumnText = styled.div`
	@media ${device.tablet} {
		column-count: 3;
		column-gap: ${spacing.betweenItemSpace * 2}em;
	}
`




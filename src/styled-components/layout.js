import styled from 'styled-components'
import { color, device, spacing }  from './variables.js';

export const NavList = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
	display: flex;
	background-color: ${color.lightBlue};
	@media ${device.tablet} {
		padding: 0 ${spacing.contentPadding}em;
	}
`

export const NavItem = styled.li`
	padding: .8em;
	text-align: center;
	a, a:visited {
		font-size: 16px;
		color: white;
		text-decoration: none;	
	}
`

export const ContentContainer = styled.section`
	padding: 1em;
	max-width: 100%;
	@media ${device.tablet} {
		padding: 0 ${spacing.contentPadding}em;
	}
`

export const FlexContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
`

export const FlexItem = styled.div`
	width: 100%;
	@media ${device.tablet} {
		width: ${props => props.width || "100%"};
		padding: 1.1em ${spacing.horizontalItemSpace}em;
		box-sizing: border-box;
	}
	h2 {
		color: ${color.lightBlue};
	}
`

export const TripleColumnText = styled.div`
	@media ${device.tablet} {
		column-count: 3;
		column-gap: ${spacing.horizontalItemSpace * 2}em;
	}
`
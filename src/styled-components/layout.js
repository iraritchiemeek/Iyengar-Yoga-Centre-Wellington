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
	}
	a:hover {
		color: black;
	}
	a.active {
		color: black;
	}
`

export const Logo = styled.div`
	cursor: pointer;
	padding: .8em;
	width: 20px;
	height: 20px;
	margin-right: ${spacing.betweenItemSpace}em;

`

export const ContentContainer = styled.section`
	@media ${device.tablet} {
		padding: 2em 0;
	}
	padding: 1em;
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
export const VerticalSpace = styled.div`
	width: 100%;
	padding: 30px 0;
	@media ${device.tablet} {
		padding: ${props => props.space || "60px"} 0;
	}
`

export const Button = styled.button`
	background-color: ${color.lightBlue};
	display: inline-block;
	padding: 5px 12px 7px;
	transition: background-color 0.1s ease-out;
	border: none;
	a, a:hover {
		color: white;
		padding: 7px 12px;
	}
	&:hover {
		background-color: ${color.darkLightBlue};
	}
`










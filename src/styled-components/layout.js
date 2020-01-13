import styled from 'styled-components'
import { color, device, spacing }  from './variables.js';

export const NavList = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
	display: flex;
	flex-wrap: wrap;
`

export const StyledHeader = styled.header`
	@media ${device.tablet} {
		padding: 0 30px;
		nav {
			max-width: ${spacing.maxContentWidth};
		}
	}
	padding: 0 15px;
	box-sizing: border-box;
	box-shadow: inset 0 -1px 0 0px rgba(0, 0, 0, 0.1);
	nav {
		padding: 8px 0;
		margin: 0 auto;
		max-width: 100%;
	}
`

export const NavItem = styled.li`
	width: 100%;
	@media ${device.tablet} {
		flex: 1;
	}
	padding: .8em;
	text-align: center;
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

export const InnerContainer = styled.div`
	padding: 0 ${spacing.betweenItemSpace}em;
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
		width: ${props => props.fullWidth ? "100%" : props.width};
		padding: 1.1em ${spacing.betweenItemSpace}em;
		box-sizing: border-box;
	}
	h2 {
		color: ${color.lightBlue};
	}
`

const calcNthChild = width => Math.round(100 / parseFloat(width))

FlexItem.defaultProps = {
	width: "33.333%"
}

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










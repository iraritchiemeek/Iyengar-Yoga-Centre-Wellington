import styled from 'styled-components'
import { color, device, spacing }  from './variables.js';

export const NavList = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
	flex-wrap: wrap;
	display: ${props => props.hidden ? `hidden` : `flex`};
`

export const StyledHeader = styled.header`
	padding: .8em 2em;
	box-sizing: border-box;
	margin: 0 auto;
	max-width: 100%;
	position: fixed;
	width: 100%;
	background-color: white;
	z-index: 2;
	height: 70px;
	@media ${device.laptop} {
		background-color: rgba(0,0,0,0);
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
	width: 30px;
	height: 40px;
	margin-right: ${spacing.betweenItemSpace}em;

`

export const ContentContainer = styled.section`
	@media ${device.laptopL} {
		padding-top: .8em;
	}
	padding: 1em;
	padding-top: 70px;
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
	padding: ${spacing.betweenItemSpace}em 0;
	@media ${device.tablet} {
		padding: ${props => props.space || `${spacing.betweenItemSpace}em`} 0;
	}
`

export const Button = styled.button`
	background-color: ${color.lightBlue};
	display: inline-block;
	transition: background-color 0.1s ease-out;
	border: none;
	cursor: pointer;
	outline: none;
	padding: 7px 20px;
	a, a:hover, a:active, p {
		color: white;
	}
	&:hover {
		background-color: ${color.darkLightBlue};
	}
`










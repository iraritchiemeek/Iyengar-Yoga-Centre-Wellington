import styled from 'styled-components'
import { color, device, spacing }  from './variables.js';

export const Banner = styled.div`
	width: 100%;
	background-color: ${color.lightBlue};
	height: 40px;
	position: fixed;
	margin-top: 80px;
	z-index: 1;
	p {
		text-align: center;
		font-weight: bold;
		color: white;
		margin: 0;
		line-height: 40px;
	}
`

export const InnerContainer = styled.div`
	padding: 0 ${spacing.betweenItemSpace}em;
`

export const Hamburger = styled.div`
	z-index: 2;
	position: relative;
	font: inherit;
    display: inline-block;
    overflow: visible;
    margin: 0;
    cursor: pointer;
    transition-timing-function: linear;
    transition-duration: .15s;
    transition-property: opacity,filter;
    text-transform: none;
    color: inherit;
    border: 0;
    background-color: transparent;
    float: right;
    &:hover {
    	opacity: .7;
    }
`

export const HamburgerBox = styled.div`
	position: relative;
	display: inline-block;
	width: 50px;
	height: 36px;
`

export const HamburgerInner = styled.div`
	position: absolute;
	width: 50px;
	height: 5px;
	transition-timing-function: ease;
	transition-duration: .15s;
	transition-property: transform;
	border-radius: 4px;
	background-color: ${color.lightBlue};
	&:before {
		transition: top .08s ease-out 0s,opacity 0s linear;
		display: block;
	    content: "";
	    position: absolute;
	    width: 50px;
	    height: 5px;
	    border-radius: 4px;
	    background-color: ${color.lightBlue};
	    opacity: ${props => props.open ? `0` : `1`};
	    top: ${props => props.open? `0` : `10px`};
	}
	&:after {
		transition: top .08s ease-out 0s,opacity 0s linear;
		top: ${props => props.open? `0` : `20px`};
		display: block;
	    content: "";
	    position: absolute;
	    width: 50px;
	    height: 5px;
	    border-radius: 4px;
	    background-color: ${color.lightBlue};
	    opacity: ${props => props.open ? `0` : `1`};
	}
`

export const ContentContainer = styled.section`
	// @media ${device.laptopL} {
	// 	padding: .8em 1em 1em 1em;
	// }
	padding: 80px 1em 1em 1em;
	max-width: ${spacing.maxContentWidth};
    margin: auto;
    box-sizing: border-box;
    z-index: 0;
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










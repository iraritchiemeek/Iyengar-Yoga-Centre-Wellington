import styled from 'styled-components'
import { color, device }  from './variables.js';

export const ContentContainer = styled.section`
	padding: 5em;
	max-width: 100%;
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
		padding: 1.1em 0.8em;
		box-sizing: border-box;
	}
	h2 {
		color: ${color.lightBlue};
	}
`
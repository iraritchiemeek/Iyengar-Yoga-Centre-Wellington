import styled from 'styled-components'
import { color, device, spacing }  from './variables.js';

export const P = styled.p`
	margin: ${props => props.margin || `initial`};
`

export const NoSpaceP = styled.p`
	margin: 0;
`

export const QuoteText = styled(NoSpaceP)`
	line-height: 1.6em;
    font-size: 20px;
    color: ${color.darkGrey};
    padding: 0 ${spacing.betweenItemSpace}em;
`

export const QuoteAuthor = styled(NoSpaceP)`
	font-style: italic;
    padding: 0 ${spacing.betweenItemSpace}em;
`
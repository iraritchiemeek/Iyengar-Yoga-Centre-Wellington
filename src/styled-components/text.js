import styled from 'styled-components'
import { color, device, spacing }  from './variables.js';

export const P = styled.p`
	margin: ${props => props.margin || `initial`}
`
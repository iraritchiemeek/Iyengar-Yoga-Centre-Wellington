import styled from 'styled-components'
import { color, device }  from './variables.js';

export const TeachersListContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
`

export const TeacherItemContainer = styled.div`
	width: 100%;
	@media ${device.tablet} {
		width: 48%;
	}
	h2 {
		color: ${color.lightBlue};
	}
`
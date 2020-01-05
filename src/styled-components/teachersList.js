import styled from 'styled-components'
import { colors }  from './variables.js';

export const TeachersListContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
`

export const TeacherItemContainer = styled.div`
	width: 48%;
	h2 {
		color: ${colors.lightBlue};
	}
`
import React from "react"
import {TeachersListContainer, TeacherItemContainer} from '../styled-components/teachersList'
import Img from "gatsby-image"


const TeachersList = props => {
 	const { teachers } = props
	if (!teachers) return null

	const renderTeacher = teacher => {
		console.log(teacher)
		teacher = teacher.node
		return (
			<TeacherItemContainer>
				<Img fluid={teacher.image.fluid} />
				<strong><p>{teacher.name}</p></strong>
				<p>{teacher.description.description}</p>
			</TeacherItemContainer>
		)
	}

	const renderTeachers = teachers => teachers.map(renderTeacher)

	return (
		<TeachersListContainer>
			{renderTeachers(teachers)}
		</TeachersListContainer>
	)
}

export default TeachersList

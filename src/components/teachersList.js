import React from "react"
import { FlexContainer, FlexItem } from '../styled-components/layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Img from "gatsby-image"


const TeachersList = props => {
 	const { teachers } = props
	if (!teachers) return null

	const renderTeacher = teacher => {
		teacher = teacher.node
		if (teacher.mainTeacher) {
			return (
				<FlexItem width="100%">
					<Img fluid={teacher.image.fluid} />
					<h2>{teacher.name}</h2>
					<p>{documentToReactComponents(teacher.description.json)}</p>
				</FlexItem>
			)
		} else {
			return (
				<FlexItem width="33.333%">
					<Img fluid={teacher.image.fluid} />
					<h2>{teacher.name}</h2>
					<p>{documentToReactComponents(teacher.description.json)}</p>
				</FlexItem>
			)
		}
	}

	const renderTeachers = teachers => teachers.map(renderTeacher)

	return (
		<FlexContainer>
			{renderTeachers(teachers)}
		</FlexContainer>
	)
}

export default TeachersList

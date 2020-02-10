import React from "react"
import { FlexContainer, FlexItem, TripleColumnText, VerticalSpace } from '../styled-components/layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Img from "gatsby-image"

const TeachersList = props => {
 	const { teachers } = props
	if (!teachers) return null

	const renderTeacher = teacher => {
		teacher = teacher.node
		return (
			<FlexItem>
				<Img fluid={teacher.image.fluid} />
				<VerticalSpace/>
				<h2>{teacher.name}</h2>
				{documentToReactComponents(teacher.description.json)}
			</FlexItem>
		)
	}

	

	const renderTeachers = teachers => teachers.map(renderTeacher)

	return (
		<FlexContainer>
			{renderTeachers(teachers)}
		</FlexContainer>
	)
}

export default TeachersList

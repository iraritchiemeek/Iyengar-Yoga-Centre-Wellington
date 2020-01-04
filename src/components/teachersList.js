import React from "react"

const TeachersList = props => {
 	const { teachers } = props
	if (!teachers) return null

	const renderTeacher = teacher => {
		teacher = teacher.node
		return (
			<h1>{teacher.name}</h1>
		)
	}

	const renderTeachers = teachers => teachers.map(renderTeacher)

	return (
		<div>
			{renderTeachers(teachers)}
		</div>
	)
}

export default TeachersList

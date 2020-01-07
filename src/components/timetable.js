import React from "react"
import { FlexContainer, FlexItem, TripleColumnText } from '../styled-components/layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Img from "gatsby-image"


const Timetable = props => {
 	const { classes } = props
	if (!classes) return null

	const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
	let sortedClasses = {"Monday": [], "Tuesday": [], "Wednesday": [], "Thursday": [], "Friday": [], "Saturday": [], "Sunday": []}
	
	const dayOfWeek = date => weekdays[new Date(date).getDay() -1]

	const renderTimetable = classes => {
		classes.map((yogaClass => {
			yogaClass = yogaClass.node
			sortedClasses[dayOfWeek(yogaClass.startTime)].push(yogaClass)
		}))
		console.log(sortedClasses)
	}

	return (
		<FlexContainer>
			{renderTimetable(classes)}
		</FlexContainer>
	)
}

export default Timetable

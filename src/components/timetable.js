import React from "react"
import { FlexContainer, FlexItem, TripleColumnText } from '../styled-components/layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Img from "gatsby-image"


const Timetable = props => {
 	const { classes } = props
	if (!classes) return null

	let timetable = {"Monday": [], "Tuesday": [], "Wednesday": [], "Thursday": [], "Friday": [], "Saturday": [], "Sunday": []}

	const weekdays = Object.keys(timetable)

	const getClassWeekday = date => weekdays[new Date(date).getDay() -1]

	const getClassTime = date => {
		date = new Date(date)
		var hour = date.getHours() 
		var minute = date.getMinutes() == 0 ? `00` : date.getMinutes()
		console.log(date.getMinutes())
		return hour <= 12 ? `${hour}:${minute}am` : `${hour - 12}:${minute}pm`
	}

	const addClassToTimetable = yogaClass => timetable[getClassWeekday(yogaClass.startTime)].push(yogaClass)

	const sortClasses = classes => {
		classes.map((yogaClass => {
			addClassToTimetable(yogaClass.node)
		}))	
		return timetable
	}

	const renderTimetable = classes => {
		timetable = sortClasses(classes)
		return weekdays.map((weekday => {
			return (
				<FlexItem width="14.285%">
					<h2>{weekday}</h2>
					{
						timetable[weekday].map((yogaClass => {
							return <p>{getClassTime(yogaClass.startTime)}</p>
						}))
					}
				</FlexItem>
			)
		}))
	}

	return (
		<FlexContainer>
			{renderTimetable(classes)}
		</FlexContainer>
	)
}

export default Timetable

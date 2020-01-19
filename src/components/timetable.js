import React from "react"
import { FlexContainer, FlexItem, VerticalList, VerticalListItem, TripleColumnText } from '../styled-components/layout'
import { NoSpaceP } from '../styled-components/text'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Img from "gatsby-image"
import { Link } from "gatsby"


const Timetable = props => {
 	const { classes } = props
	if (!classes) return null

	let timetable = { "Sunday": [], "Monday": [], "Tuesday": [], "Wednesday": [], "Thursday": [], "Friday": [], "Saturday": []}

	const weekdays = Object.keys(timetable)

	const getClassWeekday = date => weekdays[new Date(date).getDay()]

	const renderTime = (hour, minute) => hour < 12 ? `${hour}${minute != 0 ? `:${minute}` : ``}am` : `${hour != 12 ? hour - 12 : hour}${minute != 0 ? `:${minute}` : ``}pm`

	const classTime = date => {
		console.log(date)
		date = new Date(date)
		console.log(date)
		var hour = date.getHours() 
		var minute = date.getMinutes() == 0 ? `` : date.getMinutes()
		return renderTime(hour, minute)
	}

	const addClassToTimetable = yogaClass => {
		timetable[getClassWeekday(yogaClass.startTime)].push(yogaClass)
	}

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
					<VerticalList>
						{timetable[weekday].map((yogaClass => {
							return (
								<VerticalListItem>
									<strong><NoSpaceP margin="0">{classTime(yogaClass.startTime)} - {classTime(yogaClass.endTime)}</NoSpaceP></strong>
									<NoSpaceP margin="0"><Link to="/teachers/">{yogaClass.teacher.name}</Link></NoSpaceP>
									<NoSpaceP margin="0"><Link to="/classTypes/">{yogaClass.classLevel.longName}</Link></NoSpaceP>
								</VerticalListItem>
							)
						}))}
					</VerticalList>
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

import React from "react"
import { FlexContainer, FlexItem, VerticalList, VerticalListItem, TripleColumnText } from '../styled-components/layout'
import { NoSpaceP } from '../styled-components/text'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Img from "gatsby-image"
import { Link } from "gatsby"
import Moment from 'react-moment'
import moment from "moment"


const Timetable = props => {
 	const { classes } = props
	if (!classes) return null

	let timetable = { "Sunday": [], "Monday": [], "Tuesday": [], "Wednesday": [], "Thursday": [], "Friday": [], "Saturday": []}

	const weekdays = Object.keys(timetable)

	const getClassWeekday = date => moment(date).format('dddd')

	const removeEmptyMinutesFilter = date => date.replace(':00', '')

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
									<strong><NoSpaceP margin="0">
										<Moment filter={removeEmptyMinutesFilter} format="h:mm" date={yogaClass.startTime} /> - <Moment filter={removeEmptyMinutesFilter} format="h:mma" date={yogaClass.endTime} />
									</NoSpaceP></strong>
									<NoSpaceP margin="0"><Link to="/newStudents/">{yogaClass.classLevel.longName} class</Link></NoSpaceP>
									<NoSpaceP margin="0"><Link to="/teachers/">Taught by {yogaClass.teacher.firstName}</Link></NoSpaceP>
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

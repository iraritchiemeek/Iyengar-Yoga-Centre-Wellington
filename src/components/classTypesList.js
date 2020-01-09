import React from "react"
import { FlexContainer, FlexItem, TripleColumnText } from '../styled-components/layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Img from "gatsby-image"


const ClassTypesList = props => {
 	const { classTypes } = props
	if (!classTypes) return null

	console.log(classTypes)

	const renderClassType = classType => {
		classType = classType.node
		return (
			<FlexItem width="33.333%">
				<h2>{classType.longName}</h2>
				{documentToReactComponents(classType.description.json)}
			</FlexItem>
		)
	}

	const renderClassTypes = classTypes => classTypes.map(renderClassType)

	return (
		<FlexContainer>
			{renderClassTypes(classTypes)}
		</FlexContainer>
	)
}

export default ClassTypesList

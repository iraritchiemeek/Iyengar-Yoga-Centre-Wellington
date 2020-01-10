import React from "react"
import { FlexContainer, FlexItem, TripleColumnText } from '../styled-components/layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Img from "gatsby-image"
import SingleTextColumn from "./singleTextColumn"


const ClassTypesList = props => {
 	const { classTypes } = props
	if (!classTypes) return null

	console.log(classTypes)

	const renderClassType = classType => {
		classType = classType.node
		return (
			<SingleTextColumn title={classType.longName} content={classType.description.json}/>
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

import React from "react"
import { FlexContainer, FlexItem, TripleColumnText, VerticalSpace } from '../styled-components/layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Img from "gatsby-image"

const TripleTextColumn = props => {
 	const { content, title } = props
	if (!content) return null

	const renderContent = content => {
		content = content
		return (
			<React.Fragment>
				<h2>{title}</h2>
				<TripleColumnText>{documentToReactComponents(content.json)}</TripleColumnText>
			</React.Fragment>
		)
	}

	return (
		renderContent(content)
	)
}

export default TripleTextColumn

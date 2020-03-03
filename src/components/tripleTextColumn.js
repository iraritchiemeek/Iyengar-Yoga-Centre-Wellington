import React from "react"
import { FlexContainer, FlexItem, TripleColumnText, VerticalSpace, InnerContainer } from '../styled-components/layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Img from "gatsby-image"

const TripleTextColumn = props => {
 	const { content, title, images } = props
	if (!content) return null

	const renderImages = images => {
		if (!images ) {
			return null
		} else {
			return (
				images.map(image => {
					return (
						<FlexItem>
							<Img fluid={image.fluid} />
						</FlexItem>
					)
				})
			)
		}
	}

	const renderColumns = content => {
		if (!content) {
			return null
		} else {
			let n = 0
			return (
				content.map(column => {
					n++
					return (
						<FlexItem>
							{n==1 ? <h2>{title}</h2> : ``}
							{documentToReactComponents(column.json)}
						</FlexItem>
					)
				})
			)
		}
	}

	const renderContent = (content, images) => {
		return (
			<FlexContainer>
				{renderImages(images)}
				{renderColumns(content)}
			</FlexContainer>
		)
	}

	return (
		renderContent(content, images)
	)
}

export default TripleTextColumn

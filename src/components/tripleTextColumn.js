import React from "react"
import { FlexContainer, FlexItem, TripleColumnText, VerticalSpace, InnerContainer } from '../styled-components/layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Img from "gatsby-image"

const TripleTextColumn = props => {
 	const { content, title, images } = props
	if (!content) return null

	const renderImages = images => {
		console.log(images)
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

	const renderContent = content => {
		content = content
		return (
			<FlexContainer>
				{renderImages(images)}
				<FlexItem fullWidth> 
					<h2>{title}</h2>
					<TripleColumnText>{documentToReactComponents(content.json)}</TripleColumnText>
				</FlexItem>
			</FlexContainer>
		)
	}

	return (
		renderContent(content)
	)
}

export default TripleTextColumn

import React from "react"
import { QuoteText, QuoteAuthor } from '../styled-components/text'
import { FlexContainer, FlexItem} from '../styled-components/layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Img from 'gatsby-image'

const renderImage = image => {
	if (!image) return null
	return (
		<Img fluid={image.fluid} />
	)
}

const SingleTextColumn = props => {

	const { title, content, image } = props

	if (!content || !title) return null
	return (
		<FlexItem width="33.333%">
			{renderImage(image)}
			<h2>{title}</h2>
			{documentToReactComponents(content)}
		</FlexItem>
	)
}

export default SingleTextColumn

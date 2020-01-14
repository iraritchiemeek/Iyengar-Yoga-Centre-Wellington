import React from "react"
import { QuoteText, QuoteAuthor } from '../styled-components/text'
import { FlexContainer, FlexItem, VerticalSpace} from '../styled-components/layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Img from 'gatsby-image'

const renderImage = image => {
	if (!image) return null
	return (
		<React.Fragment>
			<Img style={{ height: '230px' }} fluid={image.fluid} />
			<VerticalSpace space="15px"/>
		</React.Fragment>
	)
}

const SingleTextColumn = props => {

	const { title, content, image } = props

	if (!content || !title) return null
	return (
		<FlexItem>
			{renderImage(image)}
			<h2>{title}</h2>
			{documentToReactComponents(content)}
		</FlexItem>
	)
}

export default SingleTextColumn

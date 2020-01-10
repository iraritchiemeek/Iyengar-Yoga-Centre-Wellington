import React from "react"
import { QuoteText, QuoteAuthor } from '../styled-components/text'
import { FlexContainer, FlexItem} from '../styled-components/layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'


const SingleTextColumn = props => {
	const { content } = props
	if (!content) return null
		console.log(content)
	return (
		<FlexItem width="33.333%">
			<h2>{content.title}</h2>
			{documentToReactComponents(content.content.json)}
		</FlexItem>
	)
}

export default SingleTextColumn

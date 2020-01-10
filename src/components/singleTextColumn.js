import React from "react"
import { QuoteText, QuoteAuthor } from '../styled-components/text'
import { FlexContainer, FlexItem} from '../styled-components/layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'


const SingleTextColumn = props => {
	const { title, content } = props
	if (!content || !title) return null
	return (
		<FlexItem width="33.333%">
			<h2>{title}</h2>
			{documentToReactComponents(content)}
		</FlexItem>
	)
}

export default SingleTextColumn

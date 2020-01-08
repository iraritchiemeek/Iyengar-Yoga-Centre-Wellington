import React from "react"
import { FlexContainer, FlexItem, TripleColumnText } from '../styled-components/layout'
import { Quote, NoSpaceP } from '../styled-components/text'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Img from "gatsby-image"


const TripleTextColumnPage = props => {
 	const { content } = props
	if (!content) return null

	const renderContent = content => {
		content = content.node
		return (
			<FlexItem width="100%">
				<Quote>{content.headerQuote.headerQuote}</Quote>
				<NoSpaceP>- {content.headerQuoteAuthor}</NoSpaceP>
				<h2>{content.tripleTextColumnTitle}</h2>
				<TripleColumnText>{documentToReactComponents(content.tripleTextColumnContent.json)}</TripleColumnText>
			</FlexItem>
		)
	}

	return (
		<FlexContainer>
			{renderContent(content)}
		</FlexContainer>
	)
}

export default TripleTextColumnPage

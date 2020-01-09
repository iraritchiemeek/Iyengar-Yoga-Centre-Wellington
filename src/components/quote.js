import React from "react"
import { FlexContainer, FlexItem, TripleColumnText, VerticalSpace } from '../styled-components/layout'
import { QuoteText, NoSpaceP } from '../styled-components/text'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Img from "gatsby-image"

const Quote = props => {
	const {content} = props
	if (content.headerQuote) {
		return (
			<FlexItem width="100%">
				<QuoteText>{content.headerQuote.headerQuote}</QuoteText>
				<NoSpaceP>- {content.headerQuoteAuthor}</NoSpaceP>
			</FlexItem> 
		)
	} else {
		return null
	}
}

export default Quote

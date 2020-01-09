import React from "react"
import { QuoteText, QuoteAuthor } from '../styled-components/text'

const Quote = props => {
	const { page } = props
	if (!page) return null

	console.log(page)

	if (!page.headerQuoteAuthor) {
		return (
			<QuoteText>{page.headerQuote.headerQuote}</QuoteText>
		)
	} else {
		return (
			<React.Fragment>
				<QuoteText>{page.headerQuote.headerQuote}</QuoteText>
				<QuoteAuthor>- {page.headerQuoteAuthor}</QuoteAuthor>
			</React.Fragment>
		)
	}
}

export default Quote

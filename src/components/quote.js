import React from "react"
import { QuoteText, QuoteAuthor } from '../styled-components/text'

const Quote = props => {
	const { author, content } = props
	if (!content) return null

	const renderAuthor = author => !author ? null : <QuoteAuthor>- {author}</QuoteAuthor>

	return (
		<React.Fragment>
			<QuoteText>{content}</QuoteText>
			{renderAuthor(author)}
		</React.Fragment>
	)
}

export default Quote

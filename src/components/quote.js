import React from "react"
import { QuoteText, QuoteAuthor } from '../styled-components/text'
import { VerticalSpace } from '../styled-components/layout'

const Quote = props => {
	const { author, content } = props
	if (!content) return null

	const renderAuthor = author => !author ? null : <QuoteAuthor>- {author}</QuoteAuthor>

	return (
		<React.Fragment>
			<VerticalSpace space="15px"/>
			<QuoteText>{content}</QuoteText>
			{renderAuthor(author)}
			<VerticalSpace space="15px"/>
		</React.Fragment>
	)
}

export default Quote

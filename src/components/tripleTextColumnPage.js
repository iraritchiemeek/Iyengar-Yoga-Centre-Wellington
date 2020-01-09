import React from "react"
import { FlexContainer, FlexItem, TripleColumnText, VerticalSpace } from '../styled-components/layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Img from "gatsby-image"

const TripleImage = props => {
	const {content} = props
	if (content.tripleTextColumnPhotos) {
		return (
			content.tripleTextColumnPhotos.map((image) => {
				return (
					<FlexItem width="33.333%">
						<Img fluid={image.fluid} />
					</FlexItem>
				)
			})
		)
	} else {
		return null
	}
}

const TripleTextColumnPage = props => {
 	const { content } = props
	if (!content) return null

	const renderContent = content => {
		content = content.node
		return (
			<React.Fragment>
				<TripleImage content={content}/>
				<FlexItem width="100%">
					<h2>{content.tripleTextColumnTitle}</h2>}
					<TripleColumnText>{documentToReactComponents(content.tripleTextColumnContent.json)}</TripleColumnText>
				</FlexItem>
				<VerticalSpace space="30px"/>
			</React.Fragment>

		)
	}

	return (
		<FlexContainer>
			{renderContent(content)}
		</FlexContainer>
	)
}

export default TripleTextColumnPage

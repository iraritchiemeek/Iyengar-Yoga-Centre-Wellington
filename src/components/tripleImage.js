import React from "react"
import { FlexContainer, FlexItem} from '../styled-components/layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Img from "gatsby-image"

const TripleImage = props => {
	const { page } = props
	return (
		<FlexContainer>
			{page.tripleTextColumnPhotos.map((image) => {
				return (
					<FlexItem width="33.333%">
						<Img fluid={image.fluid} />
					</FlexItem>
				)
			})}
		</FlexContainer>
	)
}

export default TripleImage

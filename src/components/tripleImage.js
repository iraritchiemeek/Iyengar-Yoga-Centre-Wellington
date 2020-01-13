import React from "react"
import { FlexContainer, FlexItem} from '../styled-components/layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Img from "gatsby-image"

const TripleImage = props => {
	const { images } = props
	console.log(images)
	return (
		<FlexContainer>
			{images.map((image) => {
				return (
					<FlexItem>
						<Img fluid={image.fluid} />
					</FlexItem>
				)
			})}
		</FlexContainer>
	)
}

export default TripleImage

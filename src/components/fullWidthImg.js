import React from "react"
import Img from "gatsby-image"

const FullWidthImg = props => {
	const { fluid } = props
	if (!fluid) return null

	return (
		<Img style={{ maxHeight: '500px' }} fluid={fluid} />
	)
}

export default FullWidthImg

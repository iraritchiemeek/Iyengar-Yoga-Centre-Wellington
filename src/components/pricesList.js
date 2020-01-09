import React from "react"
import { FlexContainer, FlexItem, TripleColumnText } from '../styled-components/layout'
import { NoSpaceP } from '../styled-components/text'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Img from "gatsby-image"

const PricesList = props => {
 	const { prices } = props
	if (!prices) return null

	const renderTitle = price => {
		if (!price.allottedClasses) return null
		if (price.allottedClasses == 1) {
			return (
				<h2>Casual Class</h2>
			)
		} else {
			return (
				<h2>{price.allottedClasses} Class Card</h2>
			)
		}
	}

	const renderValidity = price => {
		if (!price.validityPeriod) return null
		console.log(price)
		const validity = price.validityPeriod
		console.log(validity)
		if (validity) {
			return (
				<NoSpaceP>Valid for {validity} week{validity > 1 ? `s` : ``}</NoSpaceP>
			)
		} else {
			return (
				<NoSpaceP>No Expiry</NoSpaceP>
			)
		}
	}

	const renderPrice = price => {
		price = price.node
		return (
			<FlexItem width="33.333%">
				{renderTitle(price)}
				{renderValidity(price)}
				<NoSpaceP>${price.price}</NoSpaceP>
			</FlexItem>
		)
	}

	

	const renderPrices = prices => prices.map(renderPrice)

	return (
		<FlexContainer>
			{renderPrices(prices)}
		</FlexContainer>
	)
}

export default PricesList

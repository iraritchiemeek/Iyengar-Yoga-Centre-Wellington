import React from "react"
import { FlexContainer, FlexItem, TripleColumnText, Button, VerticalSpace } from '../styled-components/layout'
import { NoSpaceP } from '../styled-components/text'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Img from "gatsby-image"

const punchPassUrl = `https://wellingtonyoga.punchpass.com/passes/`

const PricesList = props => {
 	const { prices } = props
	if (!prices) return null

	const renderValidity = price => {
		const validity = price.validityPeriod ? price.validityPeriod : null
		if (validity) {
			return (
				`Valid ${validity} week${validity > 1 ? `s` : ``}`
			)
		} else {
			return (
				`No Expiry`
			)
		}
	}

	const renderDescription = price => {
		const description = price.description ? price.description.json : null
		if (description) {
			return (
				documentToReactComponents(description)
			)
		} else {
			return null
		}
	}

	const renderPrice = price => {
		price = price.node
		return (
			<FlexItem width="33.333%">
				<h2>{price.title}</h2>
				<h3>${price.price} - {renderValidity(price)}</h3>
				<Button><NoSpaceP><a href={punchPassUrl + price.punchPassId} target="_blank">Purchase</a></NoSpaceP></Button>
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
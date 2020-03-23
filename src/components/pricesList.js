import React from "react"
import { FlexContainer, FlexItem, Button, VerticalSpace} from '../styled-components/layout'
import { NoSpaceP } from '../styled-components/text'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

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

	const renderTerms = price => {
		if (!price.terms) {
			return null 
		} else {
			return (
				price.terms
			)
		}
	}

	const renderPrice = price => {
		price = price.node
		return (
			<FlexItem>
				<h2>{price.title} - ${price.price}</h2>
				<NoSpaceP>{renderTerms(price)} {renderValidity(price)}</NoSpaceP>
				<VerticalSpace space="5px" />
				<Button><NoSpaceP><a href={punchPassUrl + price.punchPassId} target="_blank">Purchase</a></NoSpaceP></Button>
				<VerticalSpace/>
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

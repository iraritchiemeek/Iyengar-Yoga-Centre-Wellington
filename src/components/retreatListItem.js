import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { FlexItem, InnerContainer, VerticalSpace, Button } from "../styled-components/layout"
import { NoSpaceP } from "../styled-components/text"
import Moment from 'react-moment'
import moment from "moment"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const RetreatListItem = props => {
  const { retreat, title } = props
  if (!retreat) return null

  const retreatTitle = title || retreat.title

  const slug = title => title.replace(/\s/g, '-').toLowerCase()

  const renderDescription = () => {
    if (!retreat.description) return null 

    return (
      documentToReactComponents(retreat.description.json)
    )
  }

  return (
    <FlexItem>
      <Link to={`/retreats/${slug(retreat.title)}`}>
        <Img style={{ height: '230px' }} fluid={retreat.mainPhoto.fluid} />
        <VerticalSpace space="1em" />
        <h2>{retreatTitle}</h2>
        <p>
          <Moment format="MMMM D" date={retreat.startDate} /> - <Moment format="MMMM D YYYY" date={retreat.endDate} />
        </p>
        {renderDescription()}
        <Button><NoSpaceP>Read More</NoSpaceP></Button>
      </Link>
    </FlexItem>
  )
}

export default RetreatListItem

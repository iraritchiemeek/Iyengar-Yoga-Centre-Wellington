import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { FlexItem, InnerContainer, VerticalSpace, Button } from "../styled-components/layout"
import { NoSpaceP } from "../styled-components/text"
import Moment from 'react-moment'
import moment from "moment"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const WorkshopListItem = props => {
  const { workshop, title } = props
  if (!workshop) return null

  const workshopTitle = title || workshop.title

  const slug = title => title.replace(/\s/g, '-').toLowerCase()

  const renderDescription = () => {
    if (!workshop.description) return null 

    return (
      documentToReactComponents(workshop.description.json)
    )
  }

  return (
    <FlexItem>
      <Link to={`/workshops/${slug(workshop.title)}`}>
        <Img style={{ height: '230px' }} fluid={workshop.image.fluid} />
        <VerticalSpace space="1em" />
        <h2>{workshopTitle}</h2>
        <p>
          <Moment format="dddd D MMM" date={workshop.startDate} /> - <Moment format="dddd D MMM" date={workshop.endDate} />
        </p>
        {renderDescription()}
        <Button><NoSpaceP>Read More</NoSpaceP></Button>
      </Link>
    </FlexItem>
  )
}

export default WorkshopListItem

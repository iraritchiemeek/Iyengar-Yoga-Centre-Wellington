import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { FlexItem, InnerContainer, VerticalSpace, Button } from "../styled-components/layout"
import { NoSpaceP } from "../styled-components/text"
import Moment from 'react-moment'
import moment from "moment"

const RetreatListItem = props => {
  const { retreat } = props
  if (!retreat) return null

  const slug = title => title.replace(/\s/g, '-').toLowerCase()

  return (
    <FlexItem>
      <Link to={`/retreats/${slug(retreat.node.title)}`}>
        <Img style={{ height: '230px' }} fluid={retreat.node.mainPhoto.fluid} />
        <VerticalSpace space="1em" />
        <h2>{retreat.node.title}</h2>

        <NoSpaceP margin="0">
          <Moment format="MMMM D" date={retreat.node.startDate} /> - <Moment format="MMMM D YYYY" date={retreat.node.endDate} />
        </NoSpaceP>

        <VerticalSpace space="0.2em" />
        <Button><NoSpaceP>Read More</NoSpaceP></Button>
      </Link>
    </FlexItem>
  )
}

export default RetreatListItem

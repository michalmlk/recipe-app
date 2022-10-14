import React from 'react'
import { CardWrapper } from './Card.styles'

const Card = props => {
	return <CardWrapper>{props.children}</CardWrapper>
}

export default Card

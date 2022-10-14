import React from 'react'
import Card from '../UI/Card/Card'
import styled from 'styled-components'

const Gradient = styled.div`
	width: 100%;
	height: 100%;
	z-index: 3;
	position: absolute;
	background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
`

const CategoryItem = props => {
	return (
		<Card>
			<div>
				<img src={props.item.image} alt={props.item.title} />
				<Gradient />
				<p>{props.item.title}</p>
			</div>
		</Card>
	)
}

export default CategoryItem

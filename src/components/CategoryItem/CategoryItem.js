import React from 'react'
import Card from '../UI/Card/Card'

const CategoryItem = props => {
	return (
		<Card>
			<div>
				<img src={props.item.image} alt={props.item.title} />
				<p>{props.item.title}</p>
			</div>
		</Card>
	)
}

export default CategoryItem

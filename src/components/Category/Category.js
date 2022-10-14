import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CategoryItem from '../CategoryItem/CategoryItem'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'

const Wrapper = styled.div`
	padding: 2rem 12rem;

	h3 {
		padding-bottom: 2rem;
	}
`

const Category = props => {
	const [recipes, setRecipes] = useState([])

	useEffect(() => {
		getData()
	}, [])

	const getData = async () => {
		const apiRequest = await fetch(
			`${props.adress}?apiKey=${process.env.REACT_APP_API_KEY}&number=${props.numberOfRecipes}&${
				props.category ? `tags=${props.category}` : ``
			}`
		)
		const data = await apiRequest.json()
		setRecipes(data.recipes)
	}

	const spliderBaseConfiguration = {
		type: 'loop',
		perPage: '3',
		pagination: false,
		arrows: false,
		drag: 'free',
		gap: '5rem',
		width: '100%',
	}

	return (
		<Wrapper>
			<h3>{props.title}</h3>
			<Splide options={{ ...spliderBaseConfiguration, ...props.spliderConfig }}>
				{recipes.map(recipe => (
					<SplideSlide key={recipe.id}>
						<CategoryItem item={recipe} />
					</SplideSlide>
				))}
			</Splide>
		</Wrapper>
	)
}

export default Category

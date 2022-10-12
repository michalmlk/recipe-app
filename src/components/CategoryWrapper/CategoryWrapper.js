import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CategoryItem from '../CategoryItem/CategoryItem'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'

const Wrapper = styled.div`
	margin: 4rem 2rem;
`

const CategoryWrapper = props => {
	const [recipes, setRecipes] = useState([])

	useEffect(() => {
		getData()
	}, [])

	const getData = async () => {
		const apiRequest = await fetch(`${props.adress}?apiKey=${process.env.REACT_APP_API_KEY}&number=${props.numberOfRecipes}`)
		const data = await apiRequest.json()
		setRecipes([...recipes, ...data.recipes])
		console.log(data.recipes)
	}

	const spliderConfiguration = {
		type: 'loop',
		perPage: '3',
		pagination: false,
		arrows: false,
		drag: 'free',
		gap: '5rem',
	}

	return (
		<Wrapper>
			<h3>{props.title}</h3>
			<Splide options={spliderConfiguration}>
				{recipes.map(recipe => (
					<SplideSlide>
						<CategoryItem item={recipe} />
					</SplideSlide>
				))}
			</Splide>
		</Wrapper>
	)
}

export default CategoryWrapper

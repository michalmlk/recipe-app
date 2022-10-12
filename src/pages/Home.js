import React from 'react'
import CategoryWrapper from '../components/CategoryWrapper/CategoryWrapper'

const Home = () => {
	return (
		<>
			<CategoryWrapper adress='https://api.spoonacular.com/recipes/random' numberOfRecipes='9' title='Popular' />
		</>
	)
}
export default Home

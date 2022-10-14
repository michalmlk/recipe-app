import React, { Fragment } from 'react'
import Category from '../components/Category/Category'
import styled from 'styled-components'
import CategorySwitcher from '../components/CategorySwitcher/CategorySwitcher'

const HomePageWrapper = styled.div`
	display: flex;
	width: 100%;
	height: 100vh;
	flex-direction: column;
	padding: 0 8rem;
`
const Home = () => {
	return (
		<Fragment>
			<HomePageWrapper>
				<CategorySwitcher />
				<Category adress='https://api.spoonacular.com/recipes/random' numberOfRecipes='9' title='Popular' />
				<Category
					adress='https://api.spoonacular.com/recipes/random'
					numberOfRecipes='9'
					title='Veggie'
					category='vegetarian'
					spliderConfig={{ perPage: '4' }}
				/>
			</HomePageWrapper>
		</Fragment>
	)
}
export default Home

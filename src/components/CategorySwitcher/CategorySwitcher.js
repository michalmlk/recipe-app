import React from 'react'
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import { GiNoodles, GiChopsticks } from 'react-icons/gi'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Navigation = styled.nav`
	display: flex;
	justify-content: center;
	padding: 20px;
	gap: 2rem;
`

const CategorySwitcher = () => {
	return (
		<Navigation>
			<NavLink to={'/home'}>
				<GiNoodles />
				<h3>Italian</h3>
			</NavLink>
			<NavLink to={'/'}>
				<GiChopsticks />
				<h3>Chinese</h3>
			</NavLink>
			<NavLink to={'/'}>
				<FaPizzaSlice />
				<h3>Fast food</h3>
			</NavLink>
			<NavLink to={'/'}>
				<FaHamburger />
				<h3>American</h3>
			</NavLink>
		</Navigation>
	)
}

export default CategorySwitcher

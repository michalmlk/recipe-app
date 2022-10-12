import React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div`
	max-width: 25vw;
	border-radius: 1rem;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.2);
	margin-bottom: 2rem;

	div {
		overflow: hidden;
		border-radius: 1rem;
		box-sizing: border-box;

		img {
			min-width: 100%;
		}

		p {
			position: absolute;
			bottom: 50px;
			left: 50%;
			transform: translateX(-50%);
			font-size: 18px;
			color: #fff;
			width: 80%;
		}
	}
`

const Card = props => {
	return <CardWrapper>{props.children}</CardWrapper>
}

export default Card

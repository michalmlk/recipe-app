import styled from 'styled-components'

export const CardWrapper = styled.div`
	max-width: 25vw;
	border-radius: 1rem;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.2);

	div {
		overflow: hidden;
		border-radius: 1rem;
		box-sizing: border-box;

		img {
			min-height: 100%;
		}

		p {
			position: absolute;
			bottom: 50px;
			left: 50%;
			transform: translateX(-50%);
			font-size: 18px;
			font-weight: bold;
			text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);
			color: #fff;
			width: 80%;
		}
	}
`

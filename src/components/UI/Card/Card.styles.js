import styled from 'styled-components'

export const CardWrapper = styled.div`
	width: 100%;
	height: 33vh;
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
			bottom: 40px;
			font-size: 18px;
			font-weight: bold;
			text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);
			color: #fff;
			width: 100%;
			text-align: center;
		}
	}
`

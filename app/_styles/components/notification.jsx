import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
	@import url('https://fonts.googleapis.com/css2?family=Gugi&display=swap');
	color: #fff;
	padding: 10px;
	margin: 0 auto;
	width: 82%;
	margin-top: 160px;
	display: flex;
	flex-direction: column;
	font-family: 'Nanum Gothic Coding', monospace;
	font-size: 40px;
	font-family: 'Gugi', sans-serif;
	text-decoration: underline;
	text-underline-position: under;
	font-style: oblique;
	text-align: center;
	position: relative;
`;

export const Title = styled.div``;

const ArrowKeyframes = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translate(-10px, -10px);
  }
`;

export const Arrow = styled.div`
	position: absolute;
	left: 50%;
	width: 40px;
	height: 40px;
	top: -60%;
	margin: -20px 0 0 -20px;
	transform: rotate(45deg);
	border-left: none;
	border-top: none;
	border-right: 2px #fff solid;
	border-bottom: 2px #fff solid;

	&:before {
		content: '';
		position: absolute;
		width: 20px;
		height: 20px;
		top: 50%;
		margin: -10px 0 0 -10px;
		border-left: none;
		border-top: none;
		border-right: 1px #fff solid;
		border-bottom: 1px #fff solid;
		animation: ${ArrowKeyframes} 2s infinite;
	}
`;

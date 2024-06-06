import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
	@import url('https://fonts.googleapis.com/css2?family=Gugi&display=swap');
	color: #fff;
	padding: 10px;
	margin: 0 auto;
	width: 82%;
	margin-top: 100px;
	display: flex;
	flex-direction: column;
	font-family: 'Nanum Gothic Coding', monospace;
	font-size: 34px;
	font-family: 'Gugi', sans-serif;
	// text-decoration: underline;
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
	left: 51%;
	width: 20px;
	height: 20px;
	top: -6%;
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

export const WorkContainerWrap = styled.div`
	@import url('https://fonts.googleapis.com/css2?family=Gugi&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Gugi&family=Nanum+Gothic+Coding&display=swap');
	margin-top: 22px;
	> .box_wrap {
		width: 100%;
		height: 300px;
		/* background: green; */

		border: 1px solid #fff;
		border-radius: 8px;
	}

	> span {
		font-size: 14px;
		font-family: 'Nanum Gothic Coding', monospace;
		color: #ffffff;
		padding-bottom: 25px;
	}
`;

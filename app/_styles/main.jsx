import styled from 'styled-components';

export const Container = styled.div`
	/* height: 800px; */
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
`;

export const Box = styled.div`
	@import url('https://fonts.googleapis.com/css2?family=Gugi&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Gugi&family=Nanum+Gothic+Coding&display=swap');
	width: 26%;
	height: 1000px;
	border: 1px solid;
	margin: 50px 0px 65px 71px;
	display: flex;
	flex-direction: column;
	position: relative;

	opacity: 1;
	transition: 0.5s ease;
	backface-visibility: hidden;

	&:hover .image {
		opacity: 0.2;
	}

	> div:nth-child(2n-1) {
		flex: 1;
	}

	> div:nth-child(2n) {
		flex: 4;
	}

	> div:last-child {
		flex: 1.5;
	}

	> div:first-child {
		display: flex;
		flex-wrap: wrap;
		text-align: center;
		justify-content: flex-start;
		align-content: flex-end;

		> span {
			font-size: 19px;
			font-family: 'Gugi', sans-serif;
			color: #ffffff;
			padding-bottom: 25px;
		}
	}

	&:hover {
		cursor: pointer;
		> div:first-child {
			> span {
				background: -webkit-linear-gradient(left, #009cf3, #16d6d9);
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
			}
		}
	}

	&:hover .description {
		background: -webkit-linear-gradient(left, #009cf3, #16d6d9);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	&:hover .middle {
		opacity: 1;
	}
	&:hover .text {
		opacity: 1;
	}
`;

export const ImgContainer = styled.div`
	background-image: ${({ imagepath }) => `url('/images/${imagepath}')`};
	background-size: cover;
	background-position: center;
	opacity: 1;
	transition: 0.5s ease;
	backface-visibility: hidden;
`;

export const Middle = styled.div`
	transition: 0.5s ease;
	opacity: 0;
	position: absolute;
	top: 46%;
	left: 50%;
	transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
	text-align: center;

	&:hover .image {
		opacity: 0.3;
	}
`;

export const Text = styled.div`
	background-color: #000000;
	color: #fff;
	font-size: 14px;
	padding: 8px 12px;
	border-radius: 10px;
	font-weight: 400;
	transition: transform 0.2s;

	&:hover {
		background-color: #fff;
		color: #000000;
		transform: scale(1.1);
	}
`;

export const Description = styled.div`
	white-space: pre-line;
	color: #fff;
	line-height: 34px;
	font-size: 18px;
	font-family: 'Nanum Gothic Coding', monospace;
	font-weight: 400;
	font-style: normal;
`;

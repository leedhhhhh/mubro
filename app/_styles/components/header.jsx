import styled from 'styled-components';

export const Container = styled.div`
	@import url('https://fonts.googleapis.com/css2?family=Gugi&display=swap');
	/* background: violet; */
	/* height: 500px; */
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

export const Description = styled.div`
	padding-top: 150px;
	padding-left: 200px;
	font-family: 'Gugi', sans-serif;
	font-weight: 400;
	font-style: normal;

	> p {
		font-size: 60px;
		color: #ffffff;
		background: -webkit-linear-gradient(left, #009cf3, #16d6d9);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
`;

export const SecondDescription = styled.div`
	color: #fff;
	align-items: flex-start;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-content: flex-end;
	flex-wrap: wrap;
	font-family: 'Gugi', sans-serif;
	font-weight: 400;
	padding-right: 125px;
	line-height: 44px;

	> p {
		font-size: 30px;
		cursor: pointer;
		&:hover {
			color: #ffffff;
			background: -webkit-linear-gradient(left, #009cf3, #16d6d9);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			text-decoration: underline;
			text-decoration-color: #009cf3;
		}
	}
`;

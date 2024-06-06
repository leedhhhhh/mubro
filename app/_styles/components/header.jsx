import styled from 'styled-components';

export const Container = styled.div`
	@import url('https://fonts.googleapis.com/css2?family=Gugi&display=swap');
	/* background: violet; */
	/* height: 500px; */
	heeight: 100%;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-content: center;
	flex-wrap: wrap;
	margin-top: 2%;
	/* margin: 0 auto; */
	gap: 38px;
	margin-left: 20px;
`;

export const Description = styled.div`
	// padding-top: 150px;
	// padding-left: 200px;
	font-family: 'Gugi', sans-serif;
	font-weight: 400;
	font-style: normal;

	> p {
		font-size: 24px;
		color: #ffffff;
		background: -webkit-linear-gradient(left, #009cf3, #16d6d9);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
`;

export const SecondDescription = styled.div`
	color: #fff;
	/* align-items: flex-end; */
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-content: flex-end;
	flex-wrap: wrap;
	font-family: 'Gugi', sans-serif;
	font-weight: 400;
	padding-right: 125px;
	line-height: 26px;
	gap: 19px;

	> p {
		font-size: 17px;
		cursor: pointer;
		display: flex;
		align-content: flex-end;
		flex-wrap: wrap;

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

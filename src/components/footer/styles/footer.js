import styled from "styled-components/macro";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin: auto;
	padding: 75px 0;
	max-width: 1000px;
	@media (max-width: 1000px) {
		padding: 75px 30px;
	}
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
`;

export const Row = styled.div`
	display: grid;

	grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
	grid-gap: 15px;
	@media (max-width) {
		grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
	}
`;

export const Title = styled.p`
	color: #757575;
	font-size: 18px;
	margin-bottom: 40px;
`;

export const Link = styled.a`
	text-decoration: none;
	color: #757575;
	margin-bottom: 20px;
	font-size: 13px;
`;

export const Text = styled.p`
	color: #757575;
	font-size: 13px;
	margin-bottom: 40px;
`;

export const Break = styled.div`
	flex-basis: 100%;
	height: 0;
`;

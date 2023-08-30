import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

function Header() {
	const { owner, repo } = useParams();
	return (
		<HeaderContainer>
			<HeaderText>
				{owner} / {repo}
			</HeaderText>
		</HeaderContainer>
	);
}

export default Header;

const HeaderContainer = styled.header`
	text-align: center;
	margin: 20px;
`;

const HeaderText = styled.h1`
	font-size: 2.1rem;
`;

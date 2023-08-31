import React from 'react';
import styled from 'styled-components';
import { API_URL } from '../../utils/urls/url';

function Header() {
	return (
		<HeaderContainer>
			<HeaderText>
				{API_URL.owner}/ {API_URL.repo}
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

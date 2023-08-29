import React from 'react';
import { useParams } from 'react-router-dom';

function Header() {
	const {owner, repo} = useParams();
	return (
		<header>
			<h1>
				<h3>{owner} / {repo}</h3>
			</h1>
		</header>
	);
}

export default Header;

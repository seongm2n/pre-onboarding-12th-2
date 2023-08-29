import React from 'react';
import { useParams } from 'react-router-dom';
function Header() {
	const { owner, repo } = useParams();
	return (
		<header>
			<h1>
				{owner} / {repo}
			</h1>
		</header>
	);
}

export default Header;
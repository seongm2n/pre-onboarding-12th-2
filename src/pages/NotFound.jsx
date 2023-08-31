import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
	const navigate = useNavigate();
	const goBack = () => {
		navigate('/');
	};
	return (
		<div style={{ display: 'flex', justifyContent: 'center', margin: '5rem' }}>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					fontSize: '30px',
					flexDirection: 'column',
				}}
			>
				<h1
					style={{
						fontSize: '3rem',
						borderBottom: 'solid black',
						marginBottom: '5rem',
					}}
				>
					404
				</h1>
				<button onClick={goBack}> issuelist로 돌아가기 </button>
			</div>
		</div>
	);
}

export default NotFound;

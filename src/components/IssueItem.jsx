import styled from 'styled-components';
import React from 'react';
import dateToKorea from '../utils/dateToKorea';

function IssueItem({ issue }) {
	const { number, title, comments } = issue;

	return (
		<Layout>
			<Info>
				<h1>{`#${number} ${title}`}</h1>
				<p>
					작성자: {issue.user.login}, 작성일: {dateToKorea(issue.created_at)}
				</p>
			</Info>
			<Comment>{`코멘트: ${comments}`}</Comment>
		</Layout>
	);
}

export default IssueItem;

const Layout = styled.li`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 15px 0 15px 0;
	border-bottom: 1px solid black;
`;

const Info = styled.div`
	display: flex;
	flex-direction: column;

	h1 {
		font-size: 1rem;
		margin-bottom: 10px;
		width: 480px;
	}

	p {
		font-size: 0.8rem;
	}
`;

const Comment = styled.span`
	font-size: 0.8rem;
	display: block;
`;

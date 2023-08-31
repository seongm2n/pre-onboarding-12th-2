import styled from 'styled-components';
import React from 'react';
import dateToKorea from '../utils/dateToKorea';

function IssueItem({ issue }) {
	const { number, title, comments, user, created_at } = issue;

	return (
		<Layout>
			<Info>
				<h1>{`#${number} ${title}`}</h1>
				<p>
					작성자: {user.login}, 작성일: {dateToKorea(created_at)}
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
	padding: 20px; /* 추가: 내용 주위에 여백을 줌 */
	transition: background-color 0.3s, box-shadow 0.3s, border-bottom-color 0.3s; /* 추가: 배경색 변화 애니메이션 */
	&:hover {
		background-color: #f4f4f4; /* 호버 시 배경색 변경 */
		box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
		border-bottom-color: #ccc;
	}
	@media (max-width: 768px) {
		padding: 17px;
	}
`;

const Info = styled.div`
	display: flex;
	flex-direction: column;

	h1 {
		font-size: 1rem;
		margin-bottom: 10px;
		width: 750px;
	}

	p {
		font-size: 0.8rem;
	}
	@media (max-width: 768px) {
		h1 {
			width: auto;
		}
	}
`;

const Comment = styled.span`
	font-size: 0.8rem;
	display: block;
	@media (max-width: 768px) {
		font-size: 0.6rem;
		margin-left: 20px;
	}
`;

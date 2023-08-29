import React from 'react';
import dateToKorea from '../utils/dateToKorea';

function IssueItem({ issue }) {
	const { number, title, comments } = issue;

	return (
		<li>
			<div>
				<h2>{`#${number} ${title}`}</h2>
				<p>
					작성자: {issue.user?.login}, 작성일: {dateToKorea(issue.created_at)}
				</p>
				<span>{`코멘트: ${comments}`}</span>
			</div>
		</li>
	);
}

export default IssueItem;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getIssueDetail } from '../utils/apis/issues';
import IssueItem from '../components/IssueItem';

function IssueDetail() {
	const { id } = useParams();
	const [issue, setIssue] = useState(null);

	useEffect(() => {
		const fetchIssueDetail = async () => {
			const detail = await getIssueDetail(id);
			setIssue(detail);
		};
		fetchIssueDetail();
	}, [id]);

	if (!issue) {
		return <p>Loading...</p>;
	}

	return (
		<div>
			{issue ? (
				<div>
					<div>
						<img
							src={issue.user?.avatar_url}
							alt='깃헙 프로필 이미지'
						/>
					</div>
					<IssueItem issue={issue} />
					<span>{issue.body}</span>
				</div>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
}

export default IssueDetail;

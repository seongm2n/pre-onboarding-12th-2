import { React, useEffect, useState, useCallback } from 'react';
import IssueItem from '../components/IssueItem';
import { getIssueList } from '../utils/apis/issues';
import { Link } from 'react-router-dom';
import { API_URL } from '../utils/urls/url';

function IssueList() {
	const [issues, setIssues] = useState([]);
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(false);

	const loadMore = useCallback(async () => {
		if (loading) return;
		setLoading(true);

		const queryParams = {
			sort: 'comments',
			per_page: 20,
			page,
			state: 'open',
		};

		try {
			const newIssues = await getIssueList(queryParams);
			if (newIssues && newIssues.length > 0) {
				setIssues((prevIssues) => [...prevIssues, ...newIssues]);
				setPage((prevPage) => prevPage + 1);
			}
		} catch (error) {
			console.error('이슈 페칭 에러', error.message);
		} finally {
			setLoading(false);
		}
	}, [loading, page]);

	useEffect(() => {
		loadMore();
	}, []);

	useEffect(() => {
		const scroll = () => {
			if (
				window.innerHeight + window.scrollY >=
				document.body.offsetHeight - 500
			) {
				loadMore();
			}
		};
		window.addEventListener('scroll', scroll);
		return () => window.removeEventListener('scroll', scroll);
	}, [loadMore, loading]);

	return (
		<div>
			<div>
				<ul>
					{issues.map((issue) => (
						<Link
							key={issue.number}
							to={`/repos/${API_URL.owner}/${API_URL.repo}/issues/${issue.number}`}
						>
							<IssueItem issue={issue} />
						</Link>
					))}
				</ul>
				{loading && <p>Loading...</p>}
			</div>
		</div>
	);
}

export default IssueList;

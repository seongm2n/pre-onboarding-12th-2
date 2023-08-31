import React, { useEffect, useCallback } from 'react';
import styled from 'styled-components';
import IssueItem from '../components/IssueItem';
import { getIssueList } from '../utils/apis/issues';
import { Link } from 'react-router-dom';
import { API_URL, AD_URL } from '../utils/urls/url';
import Loading from '../components/Layout/Loading';
import { useIssueContext } from '../context/IssueContext';

function IssueList() {
	const { state, dispatch } = useIssueContext();

	const uniqueIssues = state.issues.filter(
		(issue, index, self) =>
			self.findIndex((i) => i.number === issue.number) === index
	);

	const loadMore = useCallback(async () => {
		dispatch({ type: 'SET_LOADING', payload: true });
		try {
			const newIssues = await getIssueList({
				sort: 'comments',
				per_page: 30,
				page: state.page,
				state: 'open',
			});
			if (newIssues && newIssues.length > 0) {
				dispatch({ type: 'ADD_ISSUES', payload: newIssues });
				dispatch({ type: 'INCREMENT_PAGE' });
			} else {
				dispatch({ type: 'SET_REACHED_END', payload: true });
			}
		} catch (error) {
			console.error('이슈 페칭 에러', error.message);
		} finally {
			dispatch({ type: 'SET_LOADING', payload: false });
		}
	}, [dispatch, state.page]);

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
	}, [loadMore, state.loading]);

	return (
		<Container>
			<Ul>
				{uniqueIssues.map((issue, index) => (
					<React.Fragment key={issue.number}>
						<Link
							to={`/repos/${API_URL.owner}/${API_URL.repo}/issues/${issue.number}`}
						>
							<IssueItem issue={issue} />
						</Link>
						{index % 4 === 3 && (
							<Link to={`${AD_URL.to}`}>
								<AdImg
									src={`${AD_URL.img}`}
									alt='Ad'
								/>
							</Link>
						)}
					</React.Fragment>
				))}
			</Ul>
			{state.loading && !state.reachedEnd && <Loading />}
		</Container>
	);
}

export default IssueList;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 20px;
	flex-direction: column;
`;

const Ul = styled.ul`
	padding: 0;
`;

const AdImg = styled.img`
	display: block;
	margin: 20px auto 20px;
	align-content: center;
`;

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { getIssueDetail } from '../utils/apis/issues';
import IssueItem from '../components/IssueItem';
import MarkdownPreview from '@uiw/react-markdown-preview';
import Loading from '../components/Layout/Loading';

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
		return <Loading />;
	}

	return (
		<Container>
			{issue ? (
				<IssueContainer>
					<Info>
						<ProfileImage
							src={issue.user?.avatar_url}
							alt='깃헙 프로필 이미지'
						/>

						<IssueItem issue={issue} />
					</Info>
					{issue.body && (
						<MarkdownPreviewContainer>
							<MarkdownPreview
								source={issue.body}
								wrapperElement={{ 'data-color-mode': 'light' }}
							/>
						</MarkdownPreviewContainer>
					)}
				</IssueContainer>
			) : (
				<Loading />
			)}
		</Container>
	);
}

export default IssueDetail;

const Container = styled.div`
	display: flex;
	justify-content: center;
`;

const IssueContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 20px;
`;

const Info = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const ProfileImage = styled.img`
	width: 45px;
	height: 45px;
	margin-right: 20px;
`;

const MarkdownPreviewContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 600px;
	margin: 10px;
`;

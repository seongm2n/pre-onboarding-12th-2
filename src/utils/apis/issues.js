import axiosInstance from './axios';

export const OWNER = 'facebook';
export const REPO = 'react';
const PATH_ISSUES = `/repos/${OWNER}/${REPO}/issues`;
const SORT_TYPE = 'comments';
const PER_PAGE = '20';

export const getIssueList = async (page) => {
	const result = await axiosInstance.get(PATH_ISSUES, {
		params: {
			sort: SORT_TYPE,
			per_page: PER_PAGE,
			page: page,
		},
	});
	return result.data;
};

export const getIssue = async (issue_number) => {
	const response = await axiosInstance.get(`${PATH_ISSUES}/${issue_number}`);
	return response.data;
};

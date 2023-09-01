import axios from 'axios';
import { API_URL } from '../urls/url';

const axiosInstance = axios.create({
	baseURL: 'https://api.github.com',
	headers: {
		Accept: 'application/vnd.github.v3+json',
	},
});

// access_token 사용시
/*
axiosInstance.interceptors.request.use((request) => {
	const ACCESS_TOKEN = process.env.REACT_APP_GITHUB_ACCESS_TOKEN;
	if (ACCESS_TOKEN) request.headers['Authorization'] = `Bearer ${ACCESS_TOKEN}`;
	if (!ACCESS_TOKEN) request.headers['Authorization'] = '';
	return request;
});
*/

export const getIssueList = async (queryParams) => {
	const response = await axiosInstance.get(
		`/repos/${API_URL.owner}/${API_URL.repo}/issues`,
		{
			params: queryParams,
		}
	);
	return response.data;
};

export const getIssueDetail = async (issueId) => {
	const response = await axiosInstance.get(
		`/repos/${API_URL.owner}/${API_URL.repo}/issues/${issueId}`
	);
	return response.data;
};

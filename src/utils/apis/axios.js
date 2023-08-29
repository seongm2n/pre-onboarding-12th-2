import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: process.env.GITHUB_API_URL,
	headers: {
		Accept: 'application/vnd.github+json',
		'X-GitHub-Api-Version': '2022-11-28',
	},
});

axiosInstance.interceptors.request.use(
	(request) => {
		const ACCESS_TOKEN = process.env.GITHUB_ACCESS_TOKEN;
		if (ACCESS_TOKEN)
			request.headers[
				'Authorization'
			] = `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`;
		if (!ACCESS_TOKEN) request.headers['Authorization'] = '';
		return request;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default axiosInstance;
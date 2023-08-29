import { createBrowserRouter, Navigate } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import IssueList from '../pages/IssueList';
import IssueDetail from '../pages/IssueDetail';
import { Root } from '../router/Root';
import { OWNER, REPO } from '../utils/apis/issues';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <NotFound />,
		children: [
			{
				index: true,
				element: <Navigate to={`/repos/${OWNER}/${REPO}/issues`} />,
			},
			{ path: '/repos/:owner/:repo/issues', element: <IssueList /> },
			{ path: '/repos/:owner/:repo/issues/:id', element: <IssueDetail /> },
		],
	},
]);
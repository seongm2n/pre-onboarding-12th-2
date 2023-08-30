import { RouterProvider } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import { router } from './router/Router';
import { IssueProvider } from './context/IssueContext';

function App() {
	return (
		<IssueProvider>
			<GlobalStyle />
			<RouterProvider router={router} />
		</IssueProvider>
	);
}
export default App;

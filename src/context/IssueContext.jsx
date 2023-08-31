import { createContext, useReducer, useContext } from 'react';

const IssueContext = createContext();

const issueReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_ISSUES':
			return { ...state, issues: [...state.issues, ...action.payload] };
		case 'SET_LOADING':
			return { ...state, loading: action.payload };
		case 'SET_REACHED_END':
			return { ...state, reachedEnd: action.payload };
		case 'INCREMENT_PAGE':
			return { ...state, page: state.page + 1 };
		default:
			return state;
	}
};

const initialState = {
	issues: [],
	page: 1,
	loading: false,
	reachedEnd: false,
};

export const IssueProvider = ({ children }) => {
	const [state, dispatch] = useReducer(issueReducer, initialState);
	return (
		<IssueContext.Provider value={{ state, dispatch }}>
			{children}
		</IssueContext.Provider>
	);
};

export const useIssueContext = () => {
	const context = useContext(IssueContext);
	if (!context) {
		throw new Error('IssueProvider를 같이 써줘야 함');
	}
	return context;
};

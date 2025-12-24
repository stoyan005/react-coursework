import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Layout from './Layout';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import About from './pages/About';
import Agents from './pages/Agents';
import Buy from './pages/Buy';
import Contacts from './pages/Contacts';
import RegisterPage from './pages/Register';
import LoginPage from './pages/Login';
import HomePage from './pages';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: 'about',
				element: <About />,
			},
			{
				path: 'agents',
				element: <Agents />,
			},
			{
				path: 'buy',
				element: <Buy />,
			},
			{
				path: 'contacts',
				element: <Contacts />,
			},
			{
				path: 'register',
				element: <RegisterPage />,
			},
			{
				path: 'login',
				element: <LoginPage />,
			},
		],
	},
]);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);

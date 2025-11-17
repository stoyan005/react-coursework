import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Layout from './Layout';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import About from './About';
import Agents from './Agents';
import Buy from './Buy';
import Contacts from './Contacts';
import Rent from './Rent';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Buy />,
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
				path: 'rent',
				element: <Rent />,
			},
			{
				path: 'contacts',
				element: <Contacts />,
			},
		],
	},
]);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);

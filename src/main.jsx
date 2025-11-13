import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Layout from "./Layout";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import AboutPage from './About';

const router = createBrowserRouter([
	{
		path: "/",
		element: <div>Hello World</div>,
	},
	{
		path: "/about",
		element: <AboutPage />
	}
]);


createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Layout>
			<RouterProvider router={router} />,
		</Layout>
	</StrictMode>
);

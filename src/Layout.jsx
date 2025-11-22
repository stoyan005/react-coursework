import Navbar from './Components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
	return (
		<>
			<div className="app_layout">
				<Navbar />
				<div className="main_content">
					<Outlet />
				</div>
			</div>
		</>
	);
};

export default Layout;

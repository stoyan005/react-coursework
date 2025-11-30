import Navbar from './Components/Navbar/Navbar';
import FooterInfo from './Components/FooterInfo/FooterInfo';
import { Outlet } from 'react-router-dom';

const Layout = () => {
	return (
		<>
			<div className="app_layout">
				<Navbar />
				<div className="main_content">
					<Outlet />
				</div>
				<div>
					<FooterInfo />
				</div>
			</div>
		</>
	);
};

export default Layout;

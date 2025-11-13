import Navbar from './Components/Navbar/Navbar';

const Layout = ({ children }) => {
	return (
		<>
			<div>
				<Navbar />
				{children}
			</div>
		</>
	);
};

export default Layout;
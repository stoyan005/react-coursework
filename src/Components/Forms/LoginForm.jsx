import React, { useState } from 'react';
import './LoginForm.css';
import elite_logo from '../../assets/photos/elite_logo.png';

const LoginForm = () => {
	const [formData, setFormData] = useState({
		username: '',
		password: '',
	});

	const [errors, setErrors] = useState({});
	const [loggedIn, setLoggedIn] = useState(false);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
		setLoggedIn(false);
	};

	const validate = () => {
		const newErrors = {};

		if (!formData.username.trim()) {
			newErrors.username = 'Username is required';
		}

		if (!formData.password.trim()) {
			newErrors.password = 'Password is required';
		}

		return newErrors;
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const validationErrors = validate();

		if (Object.keys(validationErrors).length === 0) {
			setLoggedIn(true);
			setErrors({});
			setFormData({ username: '', password: '' });
		} else {
			setErrors(validationErrors);
			setLoggedIn(false);
		}
	};

	return (
		<div className="login_container">
			<form className="login_form" onSubmit={handleSubmit}>
				<div className="login_header">
					<img src={elite_logo} alt="Elite estates logo" className="login_logo" />
				</div>
				<h2>Login to an Existing Account!</h2>

				<div className="input_group">
					<input type="text" name="username" value={formData.username} onChange={handleChange} placeholder=" " />
					<label>Username:</label>
					{errors.username && <p className="error">{errors.username}</p>}
				</div>

				<div className="input_group">
					<input type="password" name="password" value={formData.password} onChange={handleChange} placeholder=" " />
					<label>Password:</label>
					{errors.password && <p className="error">{errors.password}</p>}
				</div>

				<button type="submit">Login!</button>

				{loggedIn && <p className="success_message">Login successful!</p>}
			</form>
		</div>
	);
};

export default LoginForm;

import React, { useState } from 'react';
import './RegisterForm.css';
import elite_logo from '../../assets/photos/elite_logo.png';

const RegisterForm = () => {
	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
	});

	const [errors, setErrors] = useState({});
	const [registered, setRegistered] = useState(false);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
		setRegistered(false);
	};

	const validate = () => {
		const newErrors = {};
		if (!formData.username.trim()) newErrors.username = 'Username is required';
		if (!formData.email) {
			newErrors.email = 'Email is required';
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = 'Email is invalid';
		}
		if (!formData.password) newErrors.password = 'Password is required';
		return newErrors;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);

		const validationErrors = validate();
		if (Object.keys(validationErrors).length === 0) {
			setRegistered(true);
			setFormData({
				username: '',
				email: '',
				password: '',
			});
			setErrors({});
		} else {
			setErrors(validationErrors);
			setRegistered(false);
		}
	};

	return (
		<div className="register_container">
			<form className="register_form" onSubmit={handleSubmit}>
				<div className="register_header">
					<img src={elite_logo} alt="Elite estates logo" className="register_logo" />
				</div>
				<h2>Create an Account!</h2>

				<label>Username:</label>
				<input type="text" name="username" value={formData.username} onChange={handleChange} />
				{errors.username && <p className="error">{errors.username}</p>}

				<label>Email:</label>
				<input type="email" name="email" value={formData.email} onChange={handleChange} />
				{errors.email && <p className="error">{errors.email}</p>}

				<label>Password:</label>
				<input type="password" name="password" value={formData.password} onChange={handleChange} />
				{errors.password && <p className="error">{errors.password}</p>}

				<button type="submit">Register!</button>

				{registered && <p className="success_message">Registered!</p>}
			</form>
		</div>
	);
};

export default RegisterForm;

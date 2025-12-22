import React, { useState } from 'react';
import styles from './LoginForm.module.css';
import elite_logo_nobg2 from '../../assets/photos/elite_logo_nobg2.png';

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
			newErrors.username = 'Username / Email is required';
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
		<div className={styles.login_container}>
			<form className={styles.login_form} onSubmit={handleSubmit}>
				<div className={styles.login_header}>
					<img
						src={elite_logo_nobg2}
						alt="Elite estates logo"
						className={styles.login_logo}
					/>
				</div>
				<h2>Login to an Existing Account!</h2>

				<div className={styles.input_group}>
					<input
						type="text"
						name="username"
						value={formData.username}
						onChange={handleChange}
						placeholder=" "
					/>
					<label>Username / Email:</label>
					{errors.username && <p className={styles.error}>{errors.username}</p>}
				</div>

				<div className={styles.input_group}>
					<input
						type="password"
						name="password"
						value={formData.password}
						onChange={handleChange}
						placeholder=" "
					/>
					<label>Password:</label>
					{errors.password && <p className={styles.error}>{errors.password}</p>}
				</div>

				<button type="submit" className={styles.submit_button}>
					Login!
				</button>

				{loggedIn && <p className={styles.success_message}>Login successful!</p>}
			</form>
		</div>
	);
};

export default LoginForm;

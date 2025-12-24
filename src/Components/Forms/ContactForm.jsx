import React from 'react';
import styles from './ContactForm.module.css';
import elite_logo_nobg2 from '../../assets/photos/elite_logo_nobg2.png';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactForm = () => {
	return (
		<div className={styles.contact_container}>
			<form className={styles.contact_form}>
				<div className={styles.contact_header}>
					<img
						src={elite_logo_nobg2}
						alt="Elite estates logo"
						className={styles.contact_logo}
					/>
				</div>
				<h2>Send us a message!</h2>

				<div className={styles.input_contact}>
					<input type="text" name="fullName" placeholder=" " />
					<label>Full Name:</label>
				</div>

				<div className={styles.input_contact}>
					<input type="email" name="email" placeholder=" " />
					<label>Email:</label>
				</div>

				<div className={styles.input_contact}>
					<input type="tel" name="phoneNumber" placeholder=" " />
					<label>Phone Number:</label>
				</div>

				<div className={styles.input_contact}>
					<textarea placeholder=" " rows="5" />
					<label>How can we help you?</label>
				</div>

				<button type="submit" className={styles.submit_button}>
					Submit Message!
				</button>
			</form>
		</div>
	);
};

export default ContactForm;

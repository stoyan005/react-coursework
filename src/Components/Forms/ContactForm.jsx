import React from 'react';
import styles from './ContactForm.module.css';
import elite_logo_nobg2 from '../../assets/photos/elite_logo_nobg2.png';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactForm = () => {
	return (
		<div className={styles.contact}>
			{/* CONTACT FORM */}
			<div className={styles.contact_container}>
				<form className={styles.contact_form}>
					<div className={styles.contact_header}>
						<img
							src={elite_logo_nobg2}
							alt="Elite Estates logo"
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

				{/* INFORMATION SECTION */}
				<div className={styles.info_section}>
					<h1 className={styles.title}>Get in touch with us!</h1>
					<p className={styles.text}>
						From your first question to the final signature, our knowledgeable
						team is committed to supporting you through every stage of buying,
						selling, or renting your property.
					</p>

					<div className={styles.contact_details}>
						{/* VISIT */}
						<div className={styles.contact_item}>
							<div className={styles.icon}>
								<FaMapMarkerAlt />
							</div>
							<div>
								<h3 className={styles.detail_title}>Visit Us!</h3>
								<p className={styles.detail_text}>
									512 New Court Road, London, E4D 8DL
								</p>
							</div>
						</div>

						{/* CALL US */}
						<div className={styles.contact_item}>
							<div className={styles.icon}>
								<FaPhoneAlt />
							</div>
							<div>
								<h3 className={styles.detail_title}>Call Us!</h3>
								<p className={styles.detail_text}>+44 1234 5678</p>
							</div>
						</div>

						{/* EMAIL US */}
						<div className={styles.contact_item}>
							<div className={styles.icon}>
								<FaEnvelope />
							</div>
							<div>
								<h3 className={styles.detail_title}>Email Us!</h3>
								<p className={styles.detail_text}>eliteestates@gmail.com</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactForm;

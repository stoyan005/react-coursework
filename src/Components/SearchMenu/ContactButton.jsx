import React from 'react';
import styles from './ContactButton.module.css';

const ContactButton = ({ title = 'Search' }) => {
	return <button className={styles.contact_here}>{title}</button>;
};

export default ContactButton;

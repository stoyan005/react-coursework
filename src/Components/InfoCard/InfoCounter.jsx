import { useEffect, useState } from 'react';
import styles from './InfoCounter.module.css';

const CounterBox = ({ end, label, suffix = '', duration = 2000 }) => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		let start = 0;
		const increment = end / (duration / 16);

		const timer = setInterval(() => {
			start += increment;
			if (start >= end) {
				setCount(end);
				clearInterval(timer);
			} else {
				setCount(Math.floor(start));
			}
		}, 16);

		return () => clearInterval(timer);
	}, [end, duration]);

	return (
		<div className={styles.box}>
			<h2 className={styles.number}>
				{count.toLocaleString()}
				{suffix && <span className={styles.suffix}>{suffix}</span>}
			</h2>
			<p className={styles.label}>{label}</p>
		</div>
	);
};

const InfoCounter = () => {
	return (
		<div className={styles.info_counters}>
			<CounterBox end={1500} label="Clients Satisfied" suffix="+" />
			<CounterBox end={1200} label="Properties Sold" suffix="+" />
			<CounterBox end={600} label="Commercial Deals Closed" suffix="+" />
			<CounterBox end={23} label="Years in Business" suffix="+" />
		</div>
	);
};

export default InfoCounter;

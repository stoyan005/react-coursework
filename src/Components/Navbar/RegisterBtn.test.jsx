import { render, screen } from '@testing-library/react';
import RegisterBtn from './RegisterBtn';

describe('RegisterBtn', () => {
	/* Test button renders with correct text */
	test('renders the button with "Register" text', () => {
		render(<RegisterBtn />); /* Render component */
		const button = screen.getByRole('button', {
			name: /register/i,
		}); /* Find button by text */
		expect(button).toBeInTheDocument(); /* Assert it exists */
	});

	/* Test CSS class applied */
	test('has the correct CSS class', () => {
		render(<RegisterBtn />); /* Render component */
		const button = screen.getByRole('button'); /* Get the button */
		expect(button).toHaveClass('register_button'); /* Assert correct CSS class */
	});
});

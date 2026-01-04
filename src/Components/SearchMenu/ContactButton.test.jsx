import { render, screen } from '@testing-library/react';
import ContactButton from './ContactButton';

describe('ContactButton', () => {
	/* Test default button title */
	test('renders with default title', () => {
		render(<ContactButton />); /* Render component with no props */
		const button = screen.getByRole('button', { name: /search/i }); /* Find button by text */
		expect(button).toBeInTheDocument(); /* Assert it exists */
	});

	/* Test custom button title */
	test('renders with custom title', () => {
		render(<ContactButton title="Contact Us" />); /* Render with custom title prop */
		const button = screen.getByRole('button', { name: /contact us/i });
		expect(button).toBeInTheDocument(); /* Assert custom text is displayed */
	});

	/* Test CSS class applied */
	test('has the correct CSS class', () => {
		render(<ContactButton />); /* Render component */
		const button = screen.getByRole('button'); /* Get the button */
		expect(button).toHaveClass('contact_here'); /* Assert correct CSS class */
	});
});

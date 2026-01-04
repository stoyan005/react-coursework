import { render, screen } from '@testing-library/react';
import SearchButton from './SearchButton';

describe('SearchButton', () => {
	/* Test default button title */
	test('renders with default title', () => {
		render(<SearchButton />); /* Render component with no props */
		const button = screen.getByRole('button', { name: /search/i }); /* Find button by text */
		expect(button).toBeInTheDocument(); /* Assert it exists */
	});

	/* Test custom button title */
	test('renders with custom title', () => {
		render(<SearchButton title="Find Homes" />); /* Render with custom title prop */
		const button = screen.getByRole('button', { name: /find homes/i });
		expect(button).toBeInTheDocument(); /* Assert custom text is displayed */
	});

	/* Test CSS class applied */
	test('has the correct CSS class', () => {
		render(<SearchButton />); /* Render component */
		const button = screen.getByRole('button'); /* Get the button */
		expect(button).toHaveClass('search_here'); /* Assert correct CSS class */
	});
});

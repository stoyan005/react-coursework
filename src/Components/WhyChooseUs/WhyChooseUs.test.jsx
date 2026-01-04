import { render, screen } from '@testing-library/react';
import WhyChooseUs from './WhyChooseUs';

describe('WhyChooseUs Component', () => {
	/* Test that the main section title renders correctly */
	test('renders the main title', () => {
		render(<WhyChooseUs />);
		/* Look for the main heading text */
		expect(screen.getByText('Why Choose Us?')).toBeInTheDocument();
	});

	/* Test that the description paragraph is displayed */
	test('renders the description paragraph', () => {
		render(<WhyChooseUs />);
		/* Use a regex to match the start of the paragraph text */
		expect(
			screen.getByText(/We've simplified the real estate experience/i)
		).toBeInTheDocument();
	});

	/* Test that all three feature headings render */
	test('renders all feature headings', () => {
		render(<WhyChooseUs />);
		/* Check for each feature's title */
		expect(screen.getByText('Knowledgeable Guidance')).toBeInTheDocument();
		expect(screen.getByText('Tailored Searches')).toBeInTheDocument();
		expect(screen.getByText('Transparent Closings')).toBeInTheDocument();
	});

	/* Test that the placeholder labels inside each feature are rendered */
	test('renders all feature placeholder texts', () => {
		render(<WhyChooseUs />);
		/* These are the labels inside the image placeholders */
		expect(screen.getByText('Expertise')).toBeInTheDocument();
		expect(screen.getByText('Service')).toBeInTheDocument();
		expect(screen.getByText('Trust')).toBeInTheDocument();
	});
});

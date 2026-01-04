import { render, screen } from '@testing-library/react';
import AgentsCard from './AgentsCard';

/* Mock data for testing */
const mockAgents = [
	{
		id: 1,
		name: 'Jane Doe',
		title: 'Senior Agent',
		phone: '123-456-7890',
		email: 'jane@example.com',
		image: '/jane.jpg',
	},
	{
		id: 2,
		name: 'John Smith',
		title: 'Junior Agent',
		phone: '987-654-3210',
		email: 'john@example.com',
		image: '/john.jpg',
	},
];

describe('AgentsCard', () => {
	/* Test that the page header renders correctly */
	test('renders page header', () => {
		render(<AgentsCard agents={[]} />);
		expect(screen.getByText('Meet Our Expert Real Estate Agents!')).toBeInTheDocument();
	});

	/* Test that agent cards render properly using the mock data */
	test('renders agent cards from props', () => {
		render(<AgentsCard agents={mockAgents} />);

		/* Check agent names */
		expect(screen.getByText('Jane Doe')).toBeInTheDocument();
		expect(screen.getByText('John Smith')).toBeInTheDocument();

		/* Check agent titles */
		expect(screen.getByText('Senior Agent')).toBeInTheDocument();
		expect(screen.getByText('Junior Agent')).toBeInTheDocument();

		/* Check phone links are correct */
		expect(screen.getByText('123-456-7890')).toHaveAttribute('href', 'tel:123-456-7890');

		/* Check email links are correct */
		expect(screen.getByText('jane@example.com')).toHaveAttribute(
			'href',
			'mailto:jane@example.com'
		);
	});

	/* Test that the number of agent cards matches the mock data */
	test('renders correct number of agent cards', () => {
		render(<AgentsCard agents={mockAgents} />);
		const headings = screen.getAllByRole('heading', { level: 2 });
		expect(headings).toHaveLength(mockAgents.length);
	});
});

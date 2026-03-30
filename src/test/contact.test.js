import React from 'react';
import { render, screen } from '@testing-library/react';
import Contact from '../component/contact';

describe('Contact Component', () => {
	test('renders the contact component correctly', () => {
		render(<Contact />);
		const contactElement = screen.getByText(/get in touch/i);
		expect(contactElement).toBeInTheDocument();
	});
});

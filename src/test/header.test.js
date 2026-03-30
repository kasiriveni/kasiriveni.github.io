import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../component/header';

describe('Header Component', () => {
	test('renders the header component correctly', () => {
		render(<Header />);
		const headerElement = screen.getByRole('banner'); // Assuming the header has a role="banner"
		expect(headerElement).toBeInTheDocument();
	});
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../component/footer';

describe('Footer Component', () => {
	test('renders the footer component correctly', () => {
		render(<Footer />);
		const footerElement = screen.getByText(/© 2026 ❤️ Srinivas Kasiriveni/i);
		expect(footerElement).toBeInTheDocument();
	});
});

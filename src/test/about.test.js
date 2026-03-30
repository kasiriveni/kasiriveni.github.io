import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../component/about';

describe('About Component', () => {
	test('renders the about component correctly', () => {
		render(<About />);
		const aboutElement = screen.getByText(/about/i); // Adjust the text matcher as per the component
		expect(aboutElement).toBeInTheDocument();
	});
});

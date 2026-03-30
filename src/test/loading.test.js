import React from 'react';
import { render, screen } from '@testing-library/react';
import Loading from '../component/loading';

describe('Loading Component', () => {
	test('renders the loading component correctly', () => {
		render(<Loading />);
		const loadingElement = screen.getByText(/loading/i); // Adjust the text matcher as per the component
		expect(loadingElement).toBeInTheDocument();
	});
});

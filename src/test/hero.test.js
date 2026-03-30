import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from '../component/hero';

describe('Hero Component', () => {
	test('renders the hero component correctly', () => {
		render(<Hero />);
		const heroElement = screen.getByText(/Hi, I'm Srinivas/i);
		expect(heroElement).toBeInTheDocument();
	});
});

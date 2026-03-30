import React from 'react';
import { render, screen } from '@testing-library/react';
import Skills from '../component/skills';

describe('Skills Component', () => {
	test('renders the skills component correctly', () => {
		render(<Skills />);
		const skillsElement = screen.getByText(/skills/i); // Adjust the text matcher as per the component
		expect(skillsElement).toBeInTheDocument();
	});
});

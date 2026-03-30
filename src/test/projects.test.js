import React from 'react';
import { render, screen } from '@testing-library/react';
import Projects from '../component/projects';

describe('Projects Component', () => {
	test('renders the projects component correctly', () => {
		render(<Projects />);
		const projectElements = screen.getAllByText(/projects/i);
		expect(projectElements.length).toBeGreaterThan(0);
	});
});

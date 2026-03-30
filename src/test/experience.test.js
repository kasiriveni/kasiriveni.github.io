import React from 'react';
import { render, screen } from '@testing-library/react';
import Experience from '../component/experience';

describe('Experience Component', () => {
	test('renders the experience component correctly', () => {
		render(<Experience />);
		const experienceElements = screen.getAllByText(/experience/i);
		expect(experienceElements.length).toBeGreaterThan(0);
	});
});

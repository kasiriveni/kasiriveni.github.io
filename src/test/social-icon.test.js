import React from 'react';
import { render, screen } from '@testing-library/react';
import SocialIcon from '../component/social-icon';

describe('SocialIcon Component', () => {
	test('renders the social-icon component correctly', () => {
		render(<SocialIcon icon="facebook" />); // Pass the icon prop
		const socialIconElement = screen.getByTestId('social-icon-facebook'); // Adjust the test to use data-testid
		expect(socialIconElement).toBeInTheDocument();
	});
});

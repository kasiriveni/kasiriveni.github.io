import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import ScrollToTop from '../component/scroll-to-top';

describe('ScrollToTop Component', () => {
	test('renders the scroll-to-top button when visible', () => {
		render(<ScrollToTop />);
		// Simulate scroll to make the button visible
		act(() => {
			window.scrollY = 400;
			window.dispatchEvent(new Event('scroll'));
		});
		const scrollToTopButton = screen.getByLabelText(/scroll to top/i);
		expect(scrollToTopButton).toBeInTheDocument();
	});
});

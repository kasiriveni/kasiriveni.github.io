import React, { useState, useEffect } from 'react';
import { SECTION } from './constant';

const SCROLL_THRESHOLD = 300;

const ScrollToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.scrollY > SCROLL_THRESHOLD) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener('scroll', toggleVisibility);
		return () => window.removeEventListener('scroll', toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		isVisible && (
			<button id="scrollToTopBtn" onClick={scrollToTop} aria-label={SECTION.A11Y.scrollToTop}>
				&#8679;
			</button>
		)
	);
};

export default ScrollToTop;

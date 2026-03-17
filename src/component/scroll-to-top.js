import React, { useState, useEffect } from 'react';
import '../css/style.css';

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
			<button id="scrollToTopBtn" onClick={scrollToTop} aria-label="Scroll to top">
				&#8679;
			</button>
		)
	);
};

export default ScrollToTop;

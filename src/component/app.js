import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

import Header from '../component/header';
import Footer from '../component/footer';
import Hero from '../component/hero';
import About from '../component/about';
import Skills from '../component/skills';
import Experience from '../component/experience';
import Projects from '../component/projects';
import Contact from '../component/contact';
import ScrollToTop from '../component/scroll-to-top';
import { METADATA, PROFILE, SECTION, SECTION_IDS } from '../component/constant';

const THEME_STORAGE_KEY = 'portfolio-theme';

const getInitialTheme = () => {
	if (typeof window === 'undefined') {
		return 'dark';
	}

	const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

	if (storedTheme === 'light' || storedTheme === 'dark') {
		return storedTheme;
	}

	return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
};

const App = () => {
	const [theme, setTheme] = useState(getInitialTheme);
	const [activeSection, setActiveSection] = useState('hero');

	useEffect(() => {
		document.documentElement.dataset.theme = theme;
		document.documentElement.style.colorScheme = theme;
		window.localStorage.setItem(THEME_STORAGE_KEY, theme);
	}, [theme]);

	useEffect(() => {
		const handleScroll = () => {
			const offset = 120;
			let currentSection = SECTION_IDS[0];

			SECTION_IDS.forEach((id) => {
				const element = document.getElementById(id);

				if (!element) {
					return;
				}

				const rect = element.getBoundingClientRect();

				if (rect.top <= offset && rect.bottom >= offset) {
					currentSection = id;
				}
			});

			setActiveSection((previous) => (previous === currentSection ? previous : currentSection));
		};

		// Initialize on mount and update on scroll/resize
		handleScroll();
		window.addEventListener('scroll', handleScroll);
		window.addEventListener('resize', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', handleScroll);
		};
	}, []);

	const toggleTheme = () => {
		setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
	};

	const currentMetadata = METADATA[activeSection] || METADATA.default;

	return (
		<>
			<Helmet>
				<title>{currentMetadata.title}</title>
				<meta name="description" content={currentMetadata.description} />
				<meta property="og:title" content={currentMetadata.title} />
				<meta property="og:description" content={currentMetadata.description} />
			</Helmet>
			<a href="#main-content" className="skip-link">
				{SECTION.A11Y.skipToMain}
			</a>
			<Header name={PROFILE.shortName} theme={theme} onThemeToggle={toggleTheme} />
			<main id="main-content" tabIndex="-1">
				<Hero />
				<About />
				<Skills />
				<Experience />
				<Projects />
				<Contact />
			</main>
			<Footer />
			<ScrollToTop />
		</>
	);
};

export default App;

import { useEffect, useState } from 'react';

import Header from '../component/header';
import Footer from '../component/footer';
import Hero from '../component/hero';
import About from '../component/about';
import Skills from '../component/skills';
import Experience from '../component/experience';
import Projects from '../component/projects';
import Contact from '../component/contact';
import ScrollToTop from '../component/scroll-to-top';
import { PROFILE } from '../component/constant';

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

	useEffect(() => {
		document.documentElement.dataset.theme = theme;
		document.documentElement.style.colorScheme = theme;
		window.localStorage.setItem(THEME_STORAGE_KEY, theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
	};

	return (
		<>
			<Header name={PROFILE.shortName} theme={theme} onThemeToggle={toggleTheme} />
			<main>
				<Hero />
				<About />
				<Skills />
				<Experience />
				<Projects />
				<Contact />
			</main>
			<Footer name={PROFILE.name} />
			<ScrollToTop />
		</>
	);
};

export default App;

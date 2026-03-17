import { useEffect, useRef, useState } from 'react';

import { PROFILE } from './constant';

const NAV_ITEMS = [
	{ href: '#about', label: 'About' },
	{ href: '#skills', label: 'Skills' },
	{ href: '#experience', label: 'Experience' },
	{ href: '#projects', label: 'Work' },
	{ href: '#contact', label: 'Contact' },
	{
		href: 'https://www.linkedin.com/in/kasiriveni',
		label: 'Download CV',
		target: '_blank',
	},
];

const ThemeIcon = ({ theme }) => {
	if (theme === 'dark') {
		return (
			<svg viewBox="0 0 24 24" className="header-icon-svg" aria-hidden="true">
				<path
					d="M14.5 3.5a1 1 0 0 0-1.24 1.26 7.5 7.5 0 0 1-9.5 9.5A1 1 0 0 0 2.5 15.5 10 10 0 1 0 14.5 3.5Z"
					fill="currentColor"
				/>
			</svg>
		);
	}

	return (
		<svg viewBox="0 0 24 24" className="header-icon-svg" aria-hidden="true">
			<circle cx="12" cy="12" r="4.25" fill="currentColor" />
			<g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
				<path d="M12 2.75v2.5" />
				<path d="M12 18.75v2.5" />
				<path d="M21.25 12h-2.5" />
				<path d="M5.25 12h-2.5" />
				<path d="M18.54 5.46l-1.77 1.77" />
				<path d="M7.23 16.77l-1.77 1.77" />
				<path d="M18.54 18.54l-1.77-1.77" />
				<path d="M7.23 7.23 5.46 5.46" />
			</g>
		</svg>
	);
};

const MenuIcon = ({ isOpen }) => (
	<svg viewBox="0 0 24 24" className="header-icon-svg" aria-hidden="true">
		{isOpen ? (
			<g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
				<path d="M6 6l12 12" />
				<path d="M18 6 6 18" />
			</g>
		) : (
			<g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
				<path d="M5 7.5h14" />
				<path d="M5 12h14" />
				<path d="M5 16.5h14" />
			</g>
		)}
	</svg>
);

const Header = ({ name, theme, onThemeToggle }) => {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const headerRef = useRef(null);
	const nextTheme = theme === 'dark' ? 'light' : 'dark';

	const toggleNav = () => {
		setIsNavOpen((prev) => !prev);
	};

	const handleLinkClick = () => {
		setIsNavOpen(false);
	};

	useEffect(() => {
		if (!isNavOpen) {
			return undefined;
		}

		const handleKeyDown = (event) => {
			if (event.key === 'Escape') {
				setIsNavOpen(false);
			}
		};

		const handlePointerDown = (event) => {
			if (headerRef.current && !headerRef.current.contains(event.target)) {
				setIsNavOpen(false);
			}
		};

		document.addEventListener('keydown', handleKeyDown);
		document.addEventListener('mousedown', handlePointerDown);

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
			document.removeEventListener('mousedown', handlePointerDown);
		};
	}, [isNavOpen]);

	return (
		<header className="site-header" ref={headerRef}>
			<div className="container header-content">
				<a href="#hero" className="brand-mark" onClick={handleLinkClick}>
					<span className="brand-mark-badge">SK</span>
					<span className="brand-mark-text">{PROFILE.name}</span>
				</a>
				<nav id="site-nav" className={`nav ${isNavOpen ? 'is-open' : ''}`} aria-label="Primary">
					{NAV_ITEMS.map((item) => (
						<a
							key={item.href}
							href={item.href}
							target={item.target || '_self'}
							onClick={handleLinkClick}
							aria-label={item.label}
						>
							{item.label}
						</a>
					))}
				</nav>
				<div className="header-actions">
					<button
						type="button"
						className="theme-toggle"
						onClick={onThemeToggle}
						aria-label={`Switch to ${nextTheme} theme`}
						title={`Switch to ${nextTheme} theme`}
					>
						<ThemeIcon theme={theme} />
					</button>
					<button
						type="button"
						className="nav-toggle"
						aria-controls="site-nav"
						aria-expanded={isNavOpen}
						aria-label={isNavOpen ? 'Close menu' : 'Open menu'}
						title={isNavOpen ? 'Close menu' : 'Open menu'}
						onClick={toggleNav}
					>
						<MenuIcon isOpen={isNavOpen} />
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;

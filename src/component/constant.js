export const PROFILE = {
	name: 'Srinivas Kasiriveni',
	shortName: 'Srinivas',
	initials: 'SK',
	role: 'Fullstack Developer',
	location: 'India',
	summary:
		'I work as a fullstack developer, combining modern frontend interfaces, pragmatic backend APIs, and mobile-friendly experiences with clean architecture and a strong focus on polished user experience.',
	email: 'srinivas.kasiriveni@gmail.com',
	github: 'https://github.com/kasiriveni',
	linkedin: 'https://www.linkedin.com/in/kasiriveni',
	availability: 'Open to fullstack opportunities',
	avatar: 'https://avatars.githubusercontent.com/u/10164017?v=4',
	contactLink: 'mailto:srinivas.kasiriveni@gmail.com?subject=Portfolio%20Inquiry',
};

export const SOCIAL_LINKS = [
	{
		label: 'GitHub',
		href: PROFILE.github,
		icon: 'github',
	},
	{
		label: 'LinkedIn',
		href: PROFILE.linkedin,
		icon: 'linkedin',
	},
	{
		label: 'Email',
		href: `mailto:${PROFILE.email}`,
		icon: 'email',
	},
];

export const ABOUT = {
	paragraphs: [
		'I enjoy turning product requirements into interfaces that feel fast, confident, and easy to use on real devices.',
		'My work is strongest where design detail and engineering discipline overlap: reusable components, clear UX hierarchy, and production-ready frontend code.',
	],
	highlights: [
		{ label: 'Experience', value: '12+ Years' },
		{ label: 'Primary Stack', value: 'JavaScript' },
		{ label: 'Focus', value: 'UI Engineering' },
		{ label: 'Location', value: PROFILE.location },
	],
};

export const SKILLS = [
	{
		category: 'Programming Languages',
		items: ['JavaScript', 'TypeScript', 'Python'],
	},
	{
		category: 'Frontend Frameworks',
		items: ['React', 'Vue', 'Angular'],
	},
	{
		category: 'Tools & Platforms',
		items: ['Webpack', 'Babel', 'Git'],
	},
];

export const EXPERIENCE = [
	{
		company: 'Upwork',
		period: '2023 - Present',
		role: 'Frontend Developer',
		points: [
			'Built responsive React interfaces for client-facing products and landing pages.',
			'Improved page structure and UI consistency with reusable components and shared styles.',
			'Delivered small-to-mid scope features with strong attention to layout quality on mobile.',
		],
	},
	{
		company: 'Freelance',
		period: '2021 - 2023',
		role: 'Web Developer',
		points: [
			'Created portfolio, business, and dashboard interfaces with JavaScript and React.',
			'Integrated APIs, handled UI states, and improved maintainability of existing codebases.',
			'Worked directly from visual references to deliver polished, production-ready layouts.',
		],
	},
	{
		company: 'Self Directed Learning',
		period: '2019 - 2021',
		role: 'Frontend Foundations',
		points: [
			'Developed hands-on projects covering responsive CSS, component composition, and tooling.',
			'Focused on translating designs into structured, scalable frontend implementations.',
		],
	},
];

export const PROJECTS = [
	{
		id: 1,
		name: 'Wiz',
		description:
			'A modern marketing site with editorial-style sections, strong hierarchy, and reusable CTA blocks.',
		tech: ['React', 'CSS', 'Responsive UI'],
		github: 'https://github.com/kasiriveni/kasiriveni.github.io',
		demo: 'https://kasiriveni.github.io/',
		theme: 'ocean',
	},
	{
		id: 2,
		name: 'Folio',
		description:
			'A portfolio concept focused on clean typography, soft gradients, and modular project storytelling.',
		tech: ['React', 'Webpack', 'Design System'],
		github: 'https://github.com/kasiriveni/kasiriveni.github.io',
		demo: 'https://kasiriveni.github.io/',
		theme: 'violet',
	},
	{
		id: 3,
		name: 'Sparkspace',
		description:
			'A product landing page with feature callouts, testimonial support, and conversion-focused sections.',
		tech: ['JavaScript', 'UI Design', 'Performance'],
		github: 'https://github.com/kasiriveni/kasiriveni.github.io',
		demo: 'https://kasiriveni.github.io/',
		theme: 'sand',
	},
];

export const TESTIMONIALS = [
	{
		name: 'Client Feedback',
		role: 'Startup Founder',
		quote:
			'Srinivas translated our rough references into a clean, responsive UI faster than expected and with very little iteration overhead.',
	},
	{
		name: 'Product Team',
		role: 'Design Collaboration',
		quote:
			'Layouts came back close to the design intent, especially on mobile, and the code structure was easy to extend.',
	},
	{
		name: 'Freelance Partner',
		role: 'Agency Delivery',
		quote:
			'Reliable implementation quality, clear communication, and strong attention to spacing, typography, and UI consistency.',
	},
];

export const NAV_ITEMS = [
	{ href: '#about', label: 'About' },
	{ href: '#skills', label: 'Skills' },
	{ href: '#experience', label: 'Experience' },
	{ href: '#projects', label: 'Work' },
	{ href: '#contact', label: 'Contact' },
	{
		href: PROFILE.linkedin,
		label: 'Download CV',
		target: '_blank',
	},
];

export const SECTION = {
	HERO: {
		titlePrefix: "Hi, I'm",
		primaryCtaLabel: 'View Work',
		secondaryCtaLabel: "Let's Talk",
	},
	ABOUT: {
		kicker: 'About',
		title: 'A closer look at who I am',
	},
	SKILLS: {
		kicker: 'Skills',
		title: 'Tools and technologies I enjoy working with',
	},
	EXPERIENCE: {
		kicker: 'Experience',
		title: 'Experience that shapes how I build products',
	},
	PROJECTS: {
		kicker: 'Projects',
		title: 'Selected projects and product concepts',
		githubLabel: 'GitHub',
		demoLabel: 'Live Demo',
	},
	TESTIMONIALS: {
		kicker: 'Testimonials',
		title: 'What collaborators say about working with me',
		listLabel: 'Client testimonials',
	},
	CONTACT: {
		kicker: 'Get In Touch',
		body: 'I’m currently available for portfolio builds, frontend feature work, and UI refreshes.',
		contactListLabel: 'Contact options',
		emailCta: 'Email Me',
		secondaryCta: 'Quick Intro',
		githubLabel: 'GitHub',
		linkedinLabel: 'LinkedIn',
	},
	FOOTER: {
		tagline: 'JavaScript Enthusiast 🥰',
	},
	LOADING: {
		title: 'Loading portfolio',
		caption: 'Bringing everything into focus…',
	},
	A11Y: {
		skipToMain: 'Skip to main content',
		scrollToTop: 'Scroll to top',
		themeToggleLabel: {
			light: 'Switch to light theme',
			dark: 'Switch to dark theme',
		},
		menuOpen: 'Open menu',
		menuClose: 'Close menu',
	},
};

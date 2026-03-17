export const PROFILE = {
	name: 'Srinivas Kasiriveni',
	shortName: 'Srinivas',
	role: 'Frontend Developer',
	location: 'India',
	summary:
		'I build responsive interfaces with React, clean component architecture, and a strong bias toward polished user experience.',
	introduction:
		'I design and ship product-facing web experiences that balance speed, clarity, and maintainable code.',
	email: 'srinivas.kasiriveni@gmail.com',
	github: 'https://github.com/kasiriveni',
	linkedin: 'https://www.linkedin.com/in/kasiriveni',
	availability: 'Open to frontend and full-stack opportunities',
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
		{ label: 'Experience', value: '3+ Years' },
		{ label: 'Primary Stack', value: 'React + JS' },
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

export const GITHUB_URL = 'https://api.github.com/users/kasiriveni';

import { SECTION, SKILLS } from './constant';

const SKILL_LOGOS = {
	JavaScript:
		'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
	TypeScript:
		'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
	Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
	React: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
	'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
	Express: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
	'REST APIs': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
	GraphQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
	'React Native': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
	Expo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg',
	AWS: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
	Vercel: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg',
	Netlify: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg',
	Docker: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
	PostgreSQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg',
	MySQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
	MongoDB: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg',
	DynamoDB:
		'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
	Webpack: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg',
	Babel: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg',
	Git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
	Jest: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
	ESLint: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg',
	Redux: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
};

const Skills = () => {
	return (
		<section id="skills" className="section skills-section">
			<div className="container">
				<div className="section-heading-wrap">
					<span className="section-kicker">{SECTION.SKILLS.kicker}</span>
					<h2 className="section-title">{SECTION.SKILLS.title}</h2>
				</div>
				<div className="skills-grid">
					{SKILLS.map((group) => (
						<div key={group.category} className="skill-group">
							<h3 className="skill-category">{group.category}</h3>
							<ul className="skill-list">
								{group.items.map((skill) => (
									<li key={skill} className="skill-item">
										<div className="skill-pill">
											<span className="skill-pill-icon" aria-hidden="true">
												{SKILL_LOGOS[skill] && (
													<img
														className="skill-logo-img"
														src={SKILL_LOGOS[skill]}
														alt={`${skill} logo`}
														width="18"
														height="18"
														loading="lazy"
													/>
												)}
											</span>
											<span className="skill-pill-label">{skill}</span>
										</div>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;

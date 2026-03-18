import { SECTION, SKILLS } from '../component/constant';

const SKILL_LOGOS = {
	JavaScript:
		'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
	TypeScript:
		'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
	Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
	React: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
	Vue: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
	Angular: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
	Webpack: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg',
	Babel: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg',
	Git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
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

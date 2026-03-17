import { SKILLS } from '../component/constant';

const Skills = () => {
	return (
		<section id="skills" className="section skills-section">
			<div className="container">
				<h2 className="section-title">Skills</h2>
				<div className="skills-grid">
					{SKILLS.map((group) => (
						<div key={group.category} className="skill-group">
							<h3 className="skill-category">{group.category}</h3>
							<ul className="skill-list">
								{group.items.map((skill) => (
									<li key={skill} className="skill-item">
										<span className="skill-icon">{skill}</span>
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

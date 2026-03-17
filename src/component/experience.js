import { EXPERIENCE } from './constant';

const Experience = () => {
	return (
		<section id="experience" className="section experience-section">
			<div className="container">
				<div className="section-heading-wrap section-heading-centered">
					<span className="section-kicker">Experience</span>
					<h2 className="section-title">Roles that shaped how I build products.</h2>
					<p className="section-caption">
						Frontend-heavy work with an emphasis on responsive execution, client delivery, and
						maintainable UI systems.
					</p>
				</div>
				<div className="experience-list">
					{EXPERIENCE.map((item) => (
						<article key={`${item.company}-${item.period}`} className="experience-card">
							<div className="experience-topline">
								<strong className="experience-company">{item.company}</strong>
								<span className="experience-period">{item.period}</span>
							</div>
							<h3 className="experience-role">{item.role}</h3>
							<ul className="experience-points">
								{item.points.map((point) => (
									<li key={point}>{point}</li>
								))}
							</ul>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export default Experience;

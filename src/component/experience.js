import { EXPERIENCE, SECTION } from './constant';

const Experience = () => {
	return (
		<section id="experience" className="section experience-section">
			<div className="container">
				<div className="section-heading-wrap">
					<span className="section-kicker">{SECTION.EXPERIENCE.kicker}</span>
					<h2 className="section-title">{SECTION.EXPERIENCE.title}</h2>
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

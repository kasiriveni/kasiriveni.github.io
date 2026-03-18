import { ABOUT, PROFILE, SECTION } from './constant';

const About = () => {
	return (
		<section id="about" className="section about-section">
			<div className="container">
				<div className="section-heading-wrap">
					<span className="section-kicker">{SECTION.ABOUT.kicker}</span>
					<h2 className="section-title">{SECTION.ABOUT.title}</h2>
				</div>
				<div className="about-card">
					<div className="about-visual">
						<div className="portrait-frame portrait-frame-secondary">
							<img
								src={PROFILE.avatar}
								alt={`${PROFILE.name} portrait`}
								className="portrait-image"
								width="320"
								height="400"
								loading="lazy"
								decoding="async"
							/>
						</div>
					</div>
					<div className="about-content">
						{ABOUT.paragraphs.map((paragraph) => (
							<p key={paragraph} className="section-text">
								{paragraph}
							</p>
						))}
						<div className="about-facts-grid">
							{ABOUT.highlights.map((item) => (
								<div key={item.label} className="fact-card">
									<span className="fact-label">{item.label}</span>
									<strong className="fact-value">{item.value}</strong>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;

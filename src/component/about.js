import { ABOUT, PROFILE } from './constant';

const About = () => {
	return (
		<section id="about" className="section about-section">
			<div className="container">
				<div className="section-heading-wrap">
					<span className="section-kicker">About</span>
					<h2 className="section-title">Curious about me? Here you go:</h2>
				</div>
				<div className="about-card">
					<div className="about-visual">
						<div className="portrait-frame portrait-frame-secondary">
							<img src={PROFILE.avatar} alt={PROFILE.name} className="portrait-image" />
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

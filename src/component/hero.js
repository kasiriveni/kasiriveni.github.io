import { PROFILE, SECTION } from '../component/constant';

const Hero = () => {
	return (
		<section id="hero" className="section hero-section">
			<div className="container hero-inner">
				<div className="hero-portrait-card">
					<div className="portrait-frame portrait-frame-hero">
						<img
							src={PROFILE.avatar}
							alt={`${PROFILE.name} headshot`}
							className="portrait-image"
							width="320"
							height="320"
							decoding="async"
						/>
					</div>
				</div>
				<div className="hero-copy-card">
					<h1 className="hero-title">
						{SECTION.HERO.titlePrefix} {PROFILE.shortName} <span aria-hidden="true">👋</span>
					</h1>
					<p className="hero-role">{PROFILE.role}</p>
					<p className="hero-summary">{PROFILE.summary}</p>
					<ul className="hero-meta" aria-label="Profile highlights">
						<li>{PROFILE.location} </li>
						<li>{PROFILE.availability}</li>
					</ul>
					<div className="hero-actions">
						<a href="#projects" className="btn primary-btn">
							{SECTION.HERO.primaryCtaLabel}
						</a>
						<a href="#contact" className="btn secondary-btn">
							{SECTION.HERO.secondaryCtaLabel}
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;

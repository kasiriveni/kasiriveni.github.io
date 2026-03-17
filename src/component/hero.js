import { PROFILE, SOCIAL_LINKS } from '../component/constant';
import SocialIcon from './social-icon';

const Hero = () => {
	return (
		<section id="hero" className="section hero-section">
			<div className="container hero-inner">
				<div className="hero-portrait-card">
					<div className="portrait-frame portrait-frame-hero">
						<img src={PROFILE.avatar} alt={PROFILE.name} className="portrait-image" />
					</div>
				</div>
				<div className="hero-copy-card">
					<h1 className="hero-title">
						Hi, I&apos;m {PROFILE.shortName} <span aria-hidden="true">👋</span>
					</h1>
					<p className="hero-role">{PROFILE.role}</p>
					<p className="hero-summary">{PROFILE.introduction}</p>
					<ul className="hero-meta" aria-label="Profile highlights">
						<li>{PROFILE.location}</li>
						<li>{PROFILE.availability}</li>
					</ul>
					<div className="hero-actions">
						<a href="#projects" className="btn primary-btn">
							View Work
						</a>
						<a href="#contact" className="btn secondary-btn">
							Let&apos;s Talk
						</a>
					</div>
					<div className="social-strip" aria-label="Social links">
						{SOCIAL_LINKS.map((link) => (
							<a
								key={link.label}
								href={link.href}
								target={link.href.startsWith('mailto:') ? undefined : '_blank'}
								rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
								className="social-pill"
								aria-label={link.label}
							>
								<span className="social-pill-icon">
									<SocialIcon icon={link.icon} className="social-icon-svg" />
								</span>
								<span className="social-pill-label">{link.label}</span>
							</a>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;

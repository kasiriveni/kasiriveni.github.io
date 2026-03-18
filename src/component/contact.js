import { PROFILE, SECTION, TESTIMONIALS } from '../component/constant';
import SocialIcon from './social-icon';

const Contact = () => {
	return (
		<section id="contact" className="section contact-section">
			<div className="container">
				<div className="section-heading-wrap">
					<span className="section-kicker">{SECTION.TESTIMONIALS.kicker}</span>
					<h2 className="section-title">{SECTION.TESTIMONIALS.title}</h2>
				</div>
				<ul className="testimonials-stack" aria-label={SECTION.TESTIMONIALS.listLabel}>
					{TESTIMONIALS.map((item) => (
						<li key={item.name} className="testimonial-card">
							<div className="testimonial-avatar" aria-hidden="true">
								{item.name.charAt(0)}
							</div>
							<p className="testimonial-quote">“{item.quote}”</p>
							<strong className="testimonial-name">{item.name}</strong>
						</li>
					))}
				</ul>

				<div className="contact-panel">
					<div className="section-heading-wrap">
						<span className="section-kicker">{SECTION.CONTACT.kicker}</span>
					</div>
					<p className="section-text">{SECTION.CONTACT.body}</p>
					<ul className="contact-list" aria-label={SECTION.CONTACT.contactListLabel}>
						<li>
							<a href={`mailto:${PROFILE.email}`} className="contact-link">
								<SocialIcon icon="email" className="contact-icon" /> {PROFILE.email}
							</a>
						</li>
						<li>
							<a
								href={PROFILE.github}
								target="_blank"
								rel="noopener noreferrer"
								className="contact-link"
							>
								<SocialIcon icon="github" className="contact-icon" /> {SECTION.CONTACT.githubLabel}
							</a>
						</li>
						<li>
							<a
								href={PROFILE.linkedin}
								target="_blank"
								rel="noopener noreferrer"
								className="contact-link"
							>
								<SocialIcon icon="linkedin" className="contact-icon" />{' '}
								{SECTION.CONTACT.linkedinLabel}
							</a>
						</li>
					</ul>
					<div className="hero-actions contact-actions">
						<a href={`mailto:${PROFILE.email}`} className="btn primary-btn">
							{SECTION.CONTACT.emailCta}
						</a>
						<a href={PROFILE.contactLink} className="btn secondary-btn">
							{SECTION.CONTACT.secondaryCta}
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;

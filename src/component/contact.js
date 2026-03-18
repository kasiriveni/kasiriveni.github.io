import { PROFILE, TESTIMONIALS } from '../component/constant';
import SocialIcon from './social-icon';

const Contact = () => {
	return (
		<section id="contact" className="section contact-section">
			<div className="container">
				<div className="section-heading-wrap section-heading-centered">
					<span className="section-kicker">Testimonials</span>
					<h2 className="section-title">What people say about working with me.</h2>
				</div>
				<div className="testimonials-stack" aria-label="Client testimonials" role="list">
					{TESTIMONIALS.map((item) => (
						<article key={item.name} className="testimonial-card" role="listitem">
							<div className="testimonial-avatar" aria-hidden="true">
								{item.name.charAt(0)}
							</div>
							<p className="testimonial-quote">“{item.quote}”</p>
							<strong className="testimonial-name">{item.name}</strong>
							<span className="testimonial-role">{item.role}</span>
						</article>
					))}
				</div>
				<div className="contact-panel">
					<span className="section-kicker">Get In Touch</span>
					<h2 className="section-title">Let’s build something clean and useful.</h2>
					<p className="section-text">
						I’m currently available for portfolio builds, frontend feature work, and UI refreshes.
					</p>
					<ul className="contact-list" aria-label="Contact options">
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
								<SocialIcon icon="github" className="contact-icon" /> GitHub
							</a>
						</li>
						<li>
							<a
								href={PROFILE.linkedin}
								target="_blank"
								rel="noopener noreferrer"
								className="contact-link"
							>
								<SocialIcon icon="linkedin" className="contact-icon" /> LinkedIn
							</a>
						</li>
					</ul>
					<div className="hero-actions contact-actions">
						<a href={`mailto:${PROFILE.email}`} className="btn primary-btn">
							Email Me
						</a>
						<a href={PROFILE.contactLink} className="btn secondary-btn">
							Quick Intro
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;

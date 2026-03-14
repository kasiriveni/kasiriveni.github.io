import { PROFILE } from '../component/constant';

const Contact = () => {
	return (
		<section id="contact" className="section contact-section">
			<div className="container">
				<h2 className="section-title">Contact</h2>
				<p className="section-text">
					Feel free to reach out if you would like to collaborate, have a question, or just want to
					say hello.
				</p>
				<ul className="contact-list">
					{PROFILE.email && (
						<li>
							<a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
						</li>
					)}
					{PROFILE.github && (
						<li>
							<a href={PROFILE.github} target="_blank" rel="noopener noreferrer">
								GitHub
							</a>
						</li>
					)}
					{PROFILE.linkedin && (
						<li>
							<a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">
								LinkedIn
							</a>
						</li>
					)}
				</ul>
			</div>
		</section>
	);
};

export default Contact;

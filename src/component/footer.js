import { SOCIAL_LINKS } from '../component/constant';
import SocialIcon from './social-icon';

const Footer = ({ name }) => {
	const year = new Date().getFullYear();

	return (
		<footer className="site-footer">
			<div className="container footer-inner">
				<p className="footer-copy">
					© {year} {name || 'Portfolio'}.
				</p>
				<div className="footer-icons" aria-label="Social links">
					{SOCIAL_LINKS.map((link) => (
						<a
							key={link.label}
							href={link.href}
							target={link.href.startsWith('mailto:') ? undefined : '_blank'}
							rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
							className="footer-icon-link"
							aria-label={link.label}
						>
							<SocialIcon icon={link.icon} className="footer-icon-svg" />
						</a>
					))}
				</div>
			</div>
		</footer>
	);
};

export default Footer;

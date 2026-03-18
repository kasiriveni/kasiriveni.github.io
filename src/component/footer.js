import { PROFILE, SECTION } from './constant';

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className="site-footer">
			<div className="container footer-inner">
				<p className="footer-copy">
					© {year} ✨ {PROFILE.name} ✨ {SECTION.FOOTER.tagline}
				</p>
			</div>
		</footer>
	);
};

export default Footer;

import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const SocialIcon = ({ icon, className = '' }) => {
	const commonProps = {
		className,
		'aria-hidden': 'true',
		focusable: 'false',
	};

	const iconMap = {
		facebook: <FaFacebook {...commonProps} data-testid="social-icon-facebook" />,
		twitter: <FaTwitter {...commonProps} data-testid="social-icon-twitter" />,
		linkedin: <FaLinkedin {...commonProps} data-testid="social-icon-linkedin" />,
		github: <FaGithub {...commonProps} data-testid="social-icon-github" />,
		email: <FaEnvelope {...commonProps} data-testid="social-icon-email" />,
	};

	return iconMap[icon] || null;
};

export default SocialIcon;

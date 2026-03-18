import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const SocialIcon = ({ icon, className = '' }) => {
	const commonProps = {
		className,
		'aria-hidden': 'true',
		focusable: 'false',
	};

	const iconMap = {
		facebook: <FaFacebook {...commonProps} />,
		twitter: <FaTwitter {...commonProps} />,
		linkedin: <FaLinkedin {...commonProps} />,
		github: <FaGithub {...commonProps} />,
		email: <FaEnvelope {...commonProps} />,
	};

	return iconMap[icon] || null;
};

export default SocialIcon;

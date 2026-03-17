import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const SocialIcon = ({ icon, className = '' }) => {
	const iconMap = {
		facebook: <FaFacebook className={className} />,
		twitter: <FaTwitter className={className} />,
		linkedin: <FaLinkedin className={className} />,
		github: <FaGithub className={className} />,
		email: <FaEnvelope className={className} />,
	};

	return iconMap[icon] || null;
};

export default SocialIcon;

import React, { Fragment } from "react";
import { PROFILE } from "../component/constant";

const Footer = ({ name }) => {
	const year = new Date().getFullYear();

	return (
			<footer className="site-footer">
				<div className="container footer-inner">
					<p className="footer-copy">
						© {year} {name || "Portfolio"}. All rights reserved.
					</p>
					<div className="footer-icons" aria-label="Social links">
						{PROFILE.github && (
							<a
								href={PROFILE.github}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="GitHub profile"
								className="footer-icon-link"
							>
								<svg
									className="footer-icon"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path
										fill="currentColor"
										d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.8-1.5-3.8-1.5-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.6.3-1.1.6-1.3-2.5-.3-5.1-1.3-5.1-5.7 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.8 1 .8-.2 1.6-.3 2.4-.3.8 0 1.6.1 2.4.3 2-1.3 2.8-1 2.8-1 .5 1.3.2 2.3.1 2.6.7.7 1 1.6 1 2.7 0 4.4-2.6 5.4-5.1 5.7.3.3.6.9.6 1.8v2.7c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.65 18.35.5 12 .5Z"
									/>
								</svg>
							</a>
						)}
						{PROFILE.linkedin && (
							<a
								href={PROFILE.linkedin}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="LinkedIn profile"
								className="footer-icon-link"
							>
								<svg
									className="footer-icon"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path
										fill="currentColor"
										d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.32 8.02H4.7V24H.32V8.02zM8.34 8.02h4.2v2.18h.06c.59-1.11 2.03-2.28 4.18-2.28 4.47 0 5.29 2.94 5.29 6.77V24h-4.38v-7.95c0-1.9-.03-4.33-2.64-4.33-2.64 0-3.04 2.06-3.04 4.19V24H8.34V8.02z"
									/>
								</svg>
							</a>
						)}
						{PROFILE.email && (
							<a
								href={`mailto:${PROFILE.email}`}
								aria-label="Send email"
								className="footer-icon-link"
							>
								<svg
									className="footer-icon"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path
										fill="currentColor"
										d="M2 5.5C2 4.12 3.12 3 4.5 3h15c1.38 0 2.5 1.12 2.5 2.5v13c0 1.38-1.12 2.5-2.5 2.5h-15C3.12 21 2 19.88 2 18.5v-13Zm2.5-.5c-.28 0-.5.22-.5.5v.3l6.96 4.64c.62.41 1.44.41 2.06 0L19.5 5.8v-.3c0-.28-.22-.5-.5-.5h-15Zm15.5 3.14-5.82 3.88c-1.04.69-2.37.69-3.41 0L5 8.14V18.5c0 .28.22.5.5.5h15c.28 0 .5-.22.5-.5V8.14Z"
									/>
								</svg>
							</a>
						)}
					</div>
				</div>
			</footer>
	);
};

export default Footer;

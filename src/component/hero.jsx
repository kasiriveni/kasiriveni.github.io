import React, { Fragment } from "react";
import { PROFILE } from "../component/constant";

const Hero = () => {
	return (
		<Fragment>
			<section id="hero" className="section hero-section">
				<div className="container hero-inner">
					<div>
						<h1 className="hero-title">{PROFILE.name}</h1>
						<p className="hero-role">{PROFILE.role}</p>
						<p className="hero-summary">{PROFILE.summary}</p>
						<div className="hero-actions">
							<a href="#projects" className="btn primary-btn">
								View Projects
							</a>
							<a href="#contact" className="btn secondary-btn">
								Contact Me
							</a>
						</div>
					</div>
				</div>
			</section>
		</Fragment>
	);
};

export default Hero;

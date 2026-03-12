import React, { Fragment } from "react";
import Header from "../component/header";
import Footer from "../component/footer";
import Hero from "../component/hero";
import About from "../component/about";
import Skills from "../component/skills";
import Projects from "../component/projects";
import Contact from "../component/contact";
import { PROFILE } from "../component/constant";

const App = () => {
	return (
		<Fragment>
			<Header name={PROFILE.name} />
			<main>
				<Hero />
				<About />
				<Skills />
				<Projects />
				<Contact />
			</main>
			<Footer name={PROFILE.name} />
		</Fragment>
	);
};

export default App;

import Header from '../component/header';
import Footer from '../component/footer';
import Hero from '../component/hero';
import About from '../component/about';
import Skills from '../component/skills';
import Projects from '../component/projects';
import Contact from '../component/contact';
import { PROFILE } from '../component/constant';

const App = () => {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<About />
				<Skills />
				<Projects />
				<Contact />
			</main>
			<Footer name={PROFILE.name} />
		</>
	);
};

export default App;

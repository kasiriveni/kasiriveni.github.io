import React, { Fragment } from 'react';
import Header from '../component/header';
import Footer from '../component/footer';
import Hero from '../component/hero';
import About from '../component/about';
import Skills from '../component/skills';
import Projects from '../component/projects';
import Contact from '../component/contact';

class App extends React.Component {
    render() {
        return (
            <Fragment>
                <Header name="@Srinivas" />
                <main>
                    <Hero />
                    <About />
                    <Skills />
                    <Projects />
                    <Contact />
                </main>
                <Footer name="Kasiriveni Srinivas" />
            </Fragment>
        );
    }
}

export default App;

import React, { Fragment, useState } from 'react';

const Header = ({ name }) => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(prev => !prev);
    };

    const handleLinkClick = () => {
        setIsNavOpen(false);
    };

    return (
        <Fragment>
            <header className="site-header">
                <div className="container header-content">
                    <div className="logo">{name}</div>
                    <button
                        type="button"
                        className="nav-toggle"
                        aria-label="Toggle navigation"
                        onClick={toggleNav}
                    >
                        <span className="nav-toggle-icon" aria-hidden="true"></span>
                    </button>
                    <nav className={`nav ${isNavOpen ? 'is-open' : ''}`}>
                        <a href="#about" onClick={handleLinkClick}>About</a>
                        <a href="#skills" onClick={handleLinkClick}>Skills</a>
                        <a href="#projects" onClick={handleLinkClick}>Projects</a>
                        <a href="#contact" onClick={handleLinkClick}>Contact</a>
                    </nav>
                </div>
            </header>
        </Fragment>
    );
};

export default Header;

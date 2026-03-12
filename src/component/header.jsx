import React, { Fragment } from 'react';

class Header extends React.Component {
    render() {
        return (
            <Fragment>
                <header className="site-header">
                    <div className="container header-content">
                        <div className="logo">{this.props.name}</div>
                        <nav className="nav">
                            <a href="#about">About</a>
                            <a href="#skills">Skills</a>
                            <a href="#projects">Projects</a>
                            <a href="#contact">Contact</a>
                        </nav>
                    </div>
                </header>
            </Fragment>
        );
    }
}

export default Header;

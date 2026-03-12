import React, { Fragment } from 'react';

class Footer extends React.Component {
    render() {
        const year = new Date().getFullYear();
        return (
            <Fragment>
                <footer className="site-footer">
                    <div className="container">
                        <p>
                            © {year} {this.props.name || 'Portfolio'}. All rights reserved.
                        </p>
                    </div>
                </footer>
            </Fragment>
        );
    }
}

export default Footer;

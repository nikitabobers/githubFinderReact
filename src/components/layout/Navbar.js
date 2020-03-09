import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ icon, title }) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="./index.html">
                <i className={icon} />
                {title}
            </a>
        </nav>
    );
};

Navbar.defaultProps = {
    title: "Github Finder",
    icon: "fab fa-github px-2"
};
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

export default Navbar;

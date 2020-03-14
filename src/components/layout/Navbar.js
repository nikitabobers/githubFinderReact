import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ icon, title }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h1 className="navbar-brand ml-5 " href="./index.html">
                <i className={icon} />
                {title}
            </h1>
            <ul className="navbar-nav ml-auto mr-5">
                <li className="nav-item px-2">
                    <Link className="nav-link" to="/">
                        Home
                    </Link>
                </li>
                <li className="nav-item px-2">
                    <Link className="nav-link" to="/about">
                        About
                    </Link>
                </li>
            </ul>
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

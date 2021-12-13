import React from 'react';
import {Link} from "react-router-dom";


const Nav = () => (
    <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
            <Link className="navbar-brand" to={'/'}>Fakem Tools</Link>
            <button className="navbar-toggler" type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse"
                 id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" to={'/'}
                              aria-current="page">Home</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"
                           href="https://fakem.info">Generators</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Nav;

import React from 'react';
import {Link, useHistory} from "react-router-dom";
import Searchable from "react-searchable-dropdown";
import menu from './menu.json'

const Nav = () => {
    let history = useHistory();

    return <nav className="navbar navbar-expand-lg navbar-light">
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
                    {/*<li className="nav-item">
                        <Link className="nav-link" to={'/'}
                              aria-current="page">Home</Link>
                    </li>*/}
                    <li className="nav-item">
                        <Link className="nav-link"
                              to={'/user'}>User</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link"
                              to={'/content'}>Content</Link>
                    </li>
                </ul>
                <form className="d-flex">
                    <Searchable
                        value=""
                        placeholder="Search for the tool"
                        notFoundText="No result found"
                        options={menu}
                        onSelect={value => {
                            return history.push(value)
                        }}
                        listMaxHeight={200}
                    />
                </form>
            </div>
        </div>
    </nav>
}

export default Nav;

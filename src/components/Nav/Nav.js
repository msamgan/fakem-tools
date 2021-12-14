import React from 'react';
import {Link, useHistory} from "react-router-dom";
import Searchable from "react-searchable-dropdown";
import menu from './menu.json'
import logo from '../../assets/logo-fakem.svg'

const Nav = () => {
    let history = useHistory();

    return <div className={'container'}>
        <nav className="navbar navbar-expand-lg navbar-light">
            <img src={logo} alt={'fakem-log'} style={{
                height: '38px'
            }}/>
            <Link className="navbar-brand" to={'/'}>
                <span className={'text-muted'} style={{
                    marginLeft: '10px',
                    fontSize: '28px'
                }}>Fakem Tools</span>
            </Link>
            <div className="container-fluid">
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
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{
                        marginRight: '72px'
                    }}>
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
                        <li className="nav-item">
                            <Link className="nav-link"
                                  to={'/api'}>Test Api's</Link>
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
    </div>
}

export default Nav;

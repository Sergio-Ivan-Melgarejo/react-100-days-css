import React from 'react'
import { NavLink } from 'react-router-dom';
import "./nav.css"

const Nav = () => {
    const language = "en";
    const page = "home";
    return (
        <>
            <nav className="col-12 navbar navbar-expand-md navbar-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span> 
                    </button>

                    <NavLink className="button d-md-none" to="/abaout/">What is this?</NavLink>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item my-2 ms-4">
                                <NavLink className="nav_link" activeClassName="active" to="/">The Challenge</NavLink>
                            </li>
                            <li className="nav-item my-2 ms-4">
                                <NavLink className="nav_link" activeClassName="active" to="/abaout/">What is this?</NavLink>
                            </li>
                            <li className="nav-item my-2 ms-4">
                                <NavLink className="nav_link" activeClassName="active" to="/how-to/">How can I join?</NavLink>
                            </li>
                            <li className="nav-item my-2 ms-4">
                                <NavLink className="nav_link" activeClassName="active" to="/leaderboard/">Leaderboard</NavLink>
                            </li>
                        </ul>

                        <form className="d-flex d-none d-lg-block">
                            <NavLink activeClassName="active-progress" to="/progress/" className="button">
                                <span className='span'>Check My Progress</span>
                                <div className='effect'>
                                    <span className='bar'></span>
                                    <span className='bar'></span>
                                    <span className='bar'></span>
                                </div>
                            </NavLink>
                        </form>

                    </div>
                </div>  
            </nav>
        </>
    )
}

export default Nav
import React from 'react'
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

                    <a className="button d-md-none" href="#">What is this?</a>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">The Challenge</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">What is this?</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">How can I join?</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Leaderboard</a>
                            </li>
                        </ul>

                        <form className="d-flex d-none d-lg-block">
                            <a href="#" className="button" type="submit">
                                <span className='span'>Check Progress</span>
                                <div className='effect'>
                                    <span className='bar'></span>
                                    <span className='bar'></span>
                                    <span className='bar'></span>
                                </div>
                            </a>
                        </form>

                    </div>
                </div>  
            </nav>
        </>
    )
}

export default Nav
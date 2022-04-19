import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import LanguageContext from '../Context/LanguageContext';
import "./nav.css"

const Nav = () => {
    const {pageData} = useContext(LanguageContext)
    return (
        <>
            <nav className="col-12 navbar navbar-expand-md navbar-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span> 
                    </button>

                    <NavLink className="button d-md-none" to="/abaout/">
                        {pageData.component.nav["button-2"]}
                    </NavLink>

                    <div className="collapse navbar-collapse pt-4 p-md-0" id="navbarSupportedContent">
                        
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item my-2 ms-4">
                                <NavLink className={({isActive})=>(isActive ? "nav_link active" : "nav_link")} to="/">
                                    {pageData.component.nav["button-1"]}
                                </NavLink>
                            </li>
                            <li className="nav-item my-2 ms-4">
                                <NavLink className={({isActive})=>(isActive ? "nav_link active" : "nav_link")} to="/abaout/">
                                    {pageData.component.nav["button-2"]}
                                </NavLink>
                            </li>
                            <li className="nav-item my-2 ms-4">
                                <NavLink className={({isActive})=>(isActive ? "nav_link active" : "nav_link")} to="/how-to/">
                                    {pageData.component.nav["button-3"]}
                                </NavLink>
                            </li>
                            <li className="nav-item my-2 ms-4">
                                <NavLink className={({isActive})=>(isActive ? "nav_link active" : "nav_link")} to="/leaderboard/">
                                    {pageData.component.nav["button-4"]}
                                </NavLink>
                            </li>
                        </ul>

                        <form className="d-flex d-none d-lg-block">
                            <NavLink className={({isActive})=>(isActive ? "button active-progress" : "button")} to="/progress/">
                                <span className='span'>
                                    {pageData.component.nav["button-5"]}
                                </span>
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
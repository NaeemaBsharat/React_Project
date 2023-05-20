import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import style from './Navbar.module.css';




class Navbar extends Component {
    render() {
        return (
            <div className='navbar1'>

                <nav className={`${style.test2} navbar navbar-expand-lg  text-uppercase fixed-top p-4 `}>
                    
                    <div className="container">
                        <Link className={`${style.test3} navbar-brand text-white to="/" ` }>Start Bootstrap</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className={`${style.test6} collapse navbar-collapse`} id="navbarSupportedContent">
                            <ul className= {`${style.test5} navbar-nav ms-auto mb-2 mb-lg-0`}>

                                <li className={`${style.test1} nav-item`}>
                                    <Link className={`${style.test4} nav-link text-white py-3  px-lg-3 `} to="/Portfolio">PORTFOLIO</Link>
                                </li>

                                <li className={`${style.test1} nav-item`}>
                                    <Link className={`${style.test4} nav-link text-white py-3  px-lg-3 `} to="/About">ABOUT</Link>
                                </li>

                                <li className={`${style.test1} nav-item`}>
                                    <Link className={`${style.test4} nav-link text-white py-3  px-lg-3`} to="/Contact">CONTACT</Link>
                                </li>


                            </ul>

                        </div>
                    </div>
                </nav>



            </div>
        )
    }
}

export default Navbar;

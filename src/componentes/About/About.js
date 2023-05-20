import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import style3 from './About.module.css';

class About extends Component {
    render() {
        return (
            <div>
                <section className={`${style3.test40}  text-white mb-0 pt-5 pb-5 `}>
                    <div className="container">
                        <h2 className={`${style3.test41}  text-center text-uppercase text-white pt-5  `}>About</h2>

                        <div className={`${style3.test42} w-100  d-flex align-items-center justify-content-center pt-1 pb-4 `}>

                            <div className={`${style3.test43}  `}>

                            </div>
                            <div className={`${style3.test44} ps-3 pe-3`}>
                                <i class="fa-solid fa-star"></i>

                            </div>
                            <div className={`${style3.test45} `}>

                            </div>


                        </div>

                        <div className={`${style3.test46} d-flex flex-wrap justify-content-center  w-100 `}>

                            <div className={`${style3.test47} col-lg-4 ms-auto   `}>
                                <p className={`${style3.test49} me-4`}>Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                            </div>
                            <div className={`${style3.test48} col-lg-4 me-auto `}>
                                <p className={`${style3.test49} `}>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                            </div>

                        </div>

                        <div className={`${style3.btn1} mt-4 text-center pb-5`}>
                            <Link className={`${style3.btn2} btn-xl btn btn-outline-light `} to="https://startbootstrap.com/theme/freelancer" >
                            <i  className={`${style3.icon} fa-solid fa-download me-2 `}></i>
                                Free Download!</Link>

                        </div>





                    </div>
                </section>



            </div>
        )
    }
}

export default About;

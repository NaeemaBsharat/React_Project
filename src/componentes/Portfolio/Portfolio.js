import React, { Component } from 'react'
import style2 from './Portfolio.module.css';

class Portfolio extends Component {
    render() {
        return (
            <div>

                <section className={`${style2.test20} `} id="Portfolio">
                    <div className="container">
                        <h2 className={`${style2.test21} text-center text-uppercase mb-0`}>Portfolio</h2>
                        <div className={`${style2.test22} w-100  d-flex align-items-center justify-content-center pt-2 pb-4 `}>

                            <div className={`${style2.test23}  `}>

                            </div>
                            <div className={`${style2.test24} ps-3 pe-3`}>
                                <i class="fa-solid fa-star"></i>

                            </div>
                            <div className={`${style2.test25} `}>

                            </div>


                        </div>
                        <div className={`${style2.test26} d-flex flex-wrap justify-content-center w-100  `}>
                           

                                <div className={`${style2.test28} col-md-6 col-lg-4 mb-5`}>
                                    <img src="images/cabin.png" className={`${style2.test34}  w-100 h-auto `}></img>

                                </div>
                                <div className={`${style2.test28} col-md-6 col-lg-4 mb-5 `}>
                                    <img src="images/cake.png" className={`${style2.test34}   w-100 h-auto `}></img>

                                </div>
                                <div className={`${style2.test28} col-md-6 col-lg-4 mb-5 `}>
                                    <img src="images/circus.png" className={`${style2.test34} w-100 h-auto `}></img>

                                </div>
                                <div className={`${style2.test28} col-md-6 col-lg-4  `}>
                                    <img src="images/game.png" className={`${style2.test34} w-100 h-auto `}></img>

                                </div>
                                <div className={`${style2.test28} col-md-6 col-lg-4  `}>
                                    <img src="images/safe.png" className={`${style2.test34} w-100 h-auto `}></img>

                                </div>
                                <div className={`${style2.test28} col-md-6 col-lg-4  `}>
                                    <img src="images/submarine.png" className={`${style2.test34} w-100 h-auto`}></img>

                                </div>

                            </div>

                        


                    </div>

                </section>


            </div>
        )
    }
}

export default Portfolio;

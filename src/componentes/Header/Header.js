import React, { Component } from 'react'
import style1 from './Header.module.css';

class Header extends Component {
  render() {
    return (
      <div>
        <header className={`${style1.test8}  text-white text-center  pb-4`}>
          <div className={`${style1.test11} w-100 h-100 container d-flex align-items-center flex-column  `}>
            <div className={`${style1.test9} text-center  pt-5`}>
              <img src="images/avataaars.svg" className={`${style1.test10}  mb-5 w-100  pt-5`} />

            </div>
            
            <div className={`${style1.component1} `}>

            <h1 className={`${style1.test12}  text-uppercase `}>Start Bootstrap</h1>

              <div className={`${style1.test15} w-100  d-flex align-items-center justify-content-center pt-2 `}>

                <div className={`${style1.test16}  `}>

                </div>
                <div className={`${style1.test17} ps-3 pe-3`}>
                  <i class="fa-solid fa-star"></i>

                </div>
                <div className={`${style1.test18} `}>

                </div>


              </div>
              <p className={`${style1.test19} font-weight-light  pb-5`}>Graphic Artist - Web Designer - Illustrator</p>
            </div>

            


          </div>

        </header>
      </div>
    )
  }
}

export default Header;

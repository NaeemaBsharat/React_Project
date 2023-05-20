import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import style5 from './Footer.module.css';

class Footer extends Component {
  render() {
    return (
      <div>

        <footer className={`${style5.footer1} w-100   text-center text-white `}>
          <div className="container">

            <div className={`${style5.footer2} d-flex flex-wrap justify-content-center `}>

              <div className={`${style5.footer3}  col-lg-4 mb-5 mb-lg-0 `}>

                <h4 className={`${style5.footer4} mb-4 text-uppercase`}>Location</h4>
                <div  className={`${style5.footer10} `}>2215 John Daniel Drive
                
                  <br />Clark, MO 65243<br />
                </div>

               


              </div>

              <div className={`${style5.footer3}  col-lg-4 mb-5 mb-lg-0 `}>

                <h4 className={`${style5.footer4} mb-4 text-uppercase`}>Around the Web</h4>
                <Link className={`${style5.footer5} btn btn-outline-light btn-social mx-1`} to="#">
                  <i className={`${style5.footer6} fa-brands fa-facebook   `} /></Link>


                <Link className={`${style5.footer5} btn btn-outline-light btn-social mx-1`} to="#">
                  <i className={`${style5.footer6} fa-brands fa-twitter   `} /></Link>


                <Link className={`${style5.footer5} btn btn-outline-light btn-social mx-1`} to="#">
                  <i className={`${style5.footer6} fa-brands fa-linkedin  `} /></Link>


                <Link className={`${style5.footer5} btn btn-outline-light btn-social mx-1`} to="#">
                  <i className={`${style5.footer6} fa-brands fa-dribbble   `} /></Link>

              </div>

              <div className={`${style5.footer3}  col-lg-4 mb-5 mb-lg-0 `}>

                <h4 className={`${style5.footer4} text-uppercase mb-4`}>About Freelancer</h4>
                <p className={`${style5.footer8}`}>
                  Freelance is a free to use, MIT licensed Bootstrap theme created by
                  <Link className={`${style5.footer9} ps-2`} to="http://startbootstrap.com">Start Bootstrap</Link>

                </p>
              </div>

            </div>


          </div>

        </footer>
        <div className={`${style5.footer11}  py-4 text-center text-white `} >
            <div class="container">
              <p>Copyright © Your Website 2022</p>
              </div>


        </div>

        

      </div>
    )
  }
}

export default Footer;

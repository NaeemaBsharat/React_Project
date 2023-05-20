import React, { Component } from 'react'
import style4 from './Contact.module.css';

 class Contact extends Component {
  render() {
    return (
      <div>
        <section className={`${style4.section1} `} id="Contact">
            <div className="container">
                <h2 className={`${style4.header2} text-center text-uppercase mb-0 `}>Contact Me</h2>
                <div className={`${style4.contact1} w-100  d-flex align-items-center justify-content-center  pt-2 pb-4 `}>

                    <div className={`${style4.con1}  `}>

                    </div>
                    <div className={`${style4.con2} ps-3 pe-3`}>
                        <i class="fa-solid fa-star"></i>

                    </div>
                    <div className={`${style4.con3} `}>

                    </div>


                </div>

                <div className={`${style4.form1}   d-flex flex-wrap justify-content-center pb-5`}>
                
                    <div className={`${style4.form2}   col-lg-8 col-xl-7 pt-3 `}>
                        <form className={`${style4.form3}  pb-5 `} id="Form">

                            <div className={`${style4.form4} form-floating mb-3 `}>
                               <input className={`${style4.form10} form-control`} type="text"  id="name" placeholder="Enter your name" />
                               <hr></hr>

                                <label  className={`${style4.form11} `} for="name">Full name</label>

                            </div>

                            <div className={`${style4.form4} form-floating mb-3  `}>
                                <input className={`${style4.form10} form-control`}  type="email" id="email" placeholder="name@example.com" />
                                <hr></hr>

                                <label  className={`${style4.form11} `} for="email">Email address</label>
                                

                            </div>

                            <div className={`${style4.form4} form-floating mb-3 `}>
                                <input className={`${style4.form10} form-control`} type="tel"  id="phone" placeholder="059 999 9999" />
                                <hr></hr>

                                <label  className={`${style4.form11} `} for="phone">Phone number</label>


                            </div>

                            <div className={`${style4.form4} form-floating mb-3 `}>
                                <textarea className={`${style4.form15} form-control`} type="text"  id="message"  placeholder="Enter your message here"  />
                                <hr></hr>

                                <label  className={`${style4.form11} `} for="message">Message</label>



                            </div>
                            <button className={`${style4.form12} btn btn-primary btn-xl disabled pt-3 pb-3 ps-4 pe-4 `} type="submit" id="submitButton" >Send</button>
                      
                      
                      
                      
                      

                        </form>

                    </div>
                    
                </div>


            </div>

        </section>


      </div>
    )
  }
}

export default Contact;

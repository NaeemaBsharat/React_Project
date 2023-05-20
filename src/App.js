import React, { Component } from 'react'
import Navbar from './Navbar';
import Header from './componentes/Header/Header';
import Portfolio from './componentes/Portfolio/Portfolio';
import About from './componentes/About/About';
import Contact from './componentes/Contact/Contact';
import Footer from './componentes/Footer/Footer';
import { Route,Routes } from 'react-router-dom';





class App extends Component {
  render() {
    return (
      <div>

        <Navbar/>
        <Header/>
        <Routes>
          
          <Route path='Portfolio' element={<Portfolio/>}></Route>
          <Route path='About' element={<About/>}></Route>
          <Route path='Contact' element={<Contact/>}></Route>
          
        
        
  
        </Routes>

        

        <Footer/>
          

        

    
      </div>
    );
  }
}

export default App;
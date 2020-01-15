import React, {Component} from 'react';
import Products from './Products';
import Home from './Home';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'; 

class Nav extends Component {
  render () {
    return (
 
      
      
      <div className="container">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">Barbar Shops</a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ml-auto">
          <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#products">Products</a>
            </li>
        
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#branch">Branch</a>
            </li>
            <li className="nav-item">
              <Link to="/"> Home</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger"> <Link to="/products">products</Link> </a>
            </li>
          </ul>
        </div>
      </div>
      
      
   
    
 )
}
};

export default Nav;

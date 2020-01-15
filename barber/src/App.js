import React ,{Component} from 'react';
import './App.css';
 import Branches from './Branches';
import db from './Db';
import Nav from './Nav'
import Home from './Home';
 import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'; 
import Products from './Products';
import AddProduct from './AddProduct';
 
 class App extends Component {

   render(){
 
  return (
    <Router>
     
    <div className="App">
     <nav>
     <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">Start Bootstrap</a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ml-auto">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#about"><Link to="/Branches"> Branches</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger"  ><Link to="/"> Home</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger"> <Link to="/products">products</Link> </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
     </nav>
      <div>
     <Route exact path="/"  ><Home cut={db}></Home></Route>
      <Route  path="/products" component={Products} />  
      <Route  path="/Branches" component={Branches} />
      <AddProduct></AddProduct>
      </div>
      
      
    
            </div>
            </Router>
  )}
        }  
        
   export default App ;
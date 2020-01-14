import React ,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './Products';
import Services from './Services'
import Branches from './Branches';
import db from './Db';

import Home from './Home';
 
 
 class App extends Component {

   render(){
 
  return (
    <div className="App">
      <Services></Services>
      <Products/>
      <Branches/>
      <Home cut={db} />
       </div>
  )}
        }  
        
   export default App ;
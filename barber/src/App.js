import React from 'react';
import './App.css';
import Products from './Products';
import Services from './Services';
import Home from './Home';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Home></Home>
      <Services></Services>
    <Products></Products>
   
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import header from "./header.jpg";
import './Home.css'

class Home extends Component {


    
    render() {
        return (
  
            <header className="masthead">
                
               
            <div className="container">
            
              <div className="intro-text img/header-bg.jpg">
                <div className="intro-lead-in">Welcome To Our Studio!
                {/* <img src={header} alt="header" ></img> */}
                </div>
                <div className="intro-heading text-uppercase">It's Nice To Meet You</div>
                <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>
              </div>
            </div>
          </header>
        )}}



export default Home;
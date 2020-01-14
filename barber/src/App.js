import React ,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './Products';
import Services from './Services'
import Branches from './Branches';
import Nav from './Nav';
import Home from './Home';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

 
 
 class App extends Component {
   render(){
    const style = {
      width: '30%',
      height: '30%'
    }
  return (
    <div className="App">
      <Nav></Nav>
      <Home></Home>
      <Services></Services>
      <Products/>
       
      <Map google={this.props.google} zoom={14}   
       style={style}
      initialCenter={{
        lat: 7.854885,
        lng: -88.081807
      }}>
 
 <Marker onClick={this.onMarkerClick}
         name={'Current location'} />

 <InfoWindow onClose={this.onInfoWindowClose}>
    
 </InfoWindow>
</Map>
</div>
    
  );
}
 }
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyBUXuSM7TeowjHTgqZWSM8MG5CaX8epWdM")//real key needed
})(App)
import React ,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './Products';
import Services from './Services'
import Branches from './Branches';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

 
 
 class App extends Component {
   render(){
  return (
    <div className="App">
      <Services></Services>
      <Products/>

      <Map google={this.props.google} zoom={14} 
      initialCenter={{
        lat: 7.854885,
        lng: -88.081807
      }}>
 
 <Marker onClick={this.onMarkerClick}
         name={'Current location'} />

 <InfoWindow onClose={this.onInfoWindowClose}>
     <div>
       
     </div>
 </InfoWindow>
</Map>
    
      </div>
  );
}
 }
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyBUXuSM7TeowjHTgqZWSM8MG5CaX8epWdM")//real key needed
})(App)
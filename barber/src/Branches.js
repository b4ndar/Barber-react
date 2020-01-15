
import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

import './App.css';
// eslint-disable-next-line no-unused-vars
import Products from './Products';
class Branches extends Component {

   
  render () {
    const style = {
      width: '30%',
      height: '30%'
    }
     
    return (
      
      <div id="mapp">
        
    <div>
    <p>Tahlia Branches</p>
    <Map google={this.props.google} zoom={14}   
       style={style}
      initialCenter={{
        lat: 70.854885,
        lng: -88.081807
      }}>
 
 <Marker onClick={this.onMarkerClick}
         name={'Current location'}/>

 <InfoWindow onClose={this.onInfoWindowClose}>
    
 </InfoWindow>
</Map>


<div style={{marginTop: "300px", justifyItems: 'center'}}>
<p>Al Hamra Branche</p>
    <Map google={this.props.google} zoom={14}   
       style={style}
      initialCenter={{
        lat: 40.854885,
        lng: -88.081807
      }}>
 
 <Marker onClick={this.onMarkerClick}
         name={'Current location'} />

 <InfoWindow onClose={this.onInfoWindowClose}>
    
 </InfoWindow>
</Map>
</div>
</div>
</div>
  
  );
 }
 }
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyBUXuSM7TeowjHTgqZWSM8MG5CaX8epWdM")//real key needed
})(Branches);
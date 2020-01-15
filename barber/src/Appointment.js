import React, { Component } from 'react';
import axios from 'axios';

class Appointment extends Component {

    componentDidMount(){
        for(var i=0 ; i<10 ; i++){
     axios.get(`https://cors-anywhere.herokuapp.com/https://barbernew1.herokuapp.com/reservations/1`).then(data=>{
         console.log(data)
         
            var div =  document.createElement("div")
        var name = document.createElement("p")
        var branchName = document.createElement("p")
        var time = document.createElement("p")
        div.setAttribute("style","border:1px; border-style:solid; border-color:#FFf000;padding:10px")


        
         name.innerHTML = data.data.data.name
         branchName.innerHTML  = data.data.data.branchname
    time.innerHTML = data.data.data.time
    div.appendChild(name)
    div.appendChild(branchName)
    div.appendChild(time)
       
         var s = document.getElementById("app")
    s.appendChild(div)
    })
}
        
 
   
     
    }
       
     
    render() {
        return (
            <div>
<h1>Appointment</h1>
<div id="app"></div>
                
            </div>
        );
    }
}

export default Appointment;
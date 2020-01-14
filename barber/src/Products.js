import React, {Component} from 'react';
import axios from 'axios' ;
class Products extends Component {
    componentDidMount(){
  
        for(var i =0 ; i<20 ; i++){

         
        axios.get(`https://cors-anywhere.herokuapp.com/https://barbernew1.herokuapp.com/products/${i}`)
            .then(data =>{
             var div =  document.createElement("Div")
             var photo =  document.createElement("img")
             var p = document.createElement("p")
              
             photo.setAttribute("src", data.data.data.img)
             photo.setAttribute("width", "290px");
             photo.setAttribute("height", "228");
             div.setAttribute("width", "300px");
             div.setAttribute("height", "300px");
             p.innerHTML = data.data.data.name
             div.appendChild(photo)
             div.appendChild(p)
          document.getElementById("products").appendChild(div)
                    console.log(data)
        }) }}
    


    render(){
        return(
            <div id="products">
                
            </div>
        );
    }
}

export default Products;
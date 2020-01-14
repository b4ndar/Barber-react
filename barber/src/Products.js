import React, {Component} from 'react';
import axios from "axios";


class Products extends Component {
    componentDidMount(){
        axios.get(`https://cors-anywhere.herokuapp.com/https://barbernew1.herokuapp.com/products/8`)
            .then(data =>{
             var div =  document.createElement("Div")
             var img =  document.createElement("img")
             var p = document.createElement("p")
             img.setAttribute("src", data.data.data.img)
             p.innerHTML = data.data.data.price
             div.appendChild(img)
             div.appendChild(p)
          document.getElementById("products").appendChild(div)
                    console.log(data)
        })}
    render(){
        return(
            <div id="products">
            </div>
        );
    }
}

export default Products;
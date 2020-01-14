import React, {Component} from 'react';
import axios from 'axios' ;
class Products extends Component {

    componentDidMount(){
        
        
        
        for(var i =1 ; i<10 ; i++){

         
        axios.get(`https://cors-anywhere.herokuapp.com/https://barbernew1.herokuapp.com/products/${i}`)
            .then(data =>{
             var div =  document.createElement("Div")
             var photo =  document.createElement("img")
             var name = document.createElement("p")
             var price = document.createElement("p")
             
             photo.setAttribute("src", data.data.data.img)
            
             photo.setAttribute("width", "290px");
             photo.setAttribute("height", "228");
             photo.classList.add("img-fluid");
             div.setAttribute("width", "300px");
             div.setAttribute("height", "300px");
             div.setAttribute("style","border:1px; border-style:solid; border-color:#FFf000;padding:10px")
             name.innerHTML = data.data.data.name
             price.innerHTML =data.data.data.price
            
             div.classList.add("col-md-4");
            

             div.appendChild(photo)
             div.appendChild(name)
             div.appendChild(price)

         var s = document.getElementById("products")
        s.appendChild(div)
                    console.log(data)
        }) }}
    


    render(){
        return(
            <div >
                
                <section className="bg-light page-section" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">products</h2>
            <h3 className="section-subheading text-muted">All avilable products.</h3>
          </div>
        </div>
        <div className="row" id="products">
           
        
    
        </div>
                </div>
                </section>
            </div>
        );
    }
}

export default Products;
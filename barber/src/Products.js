import React, {Component} from 'react';
import axios from 'axios' ;
class Products extends Component {

    componentDidMount(){
        
        
        
        for(var i =1 ; i<9 ; i++){

         
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
            <div id="products">
             
                <section className="bg-light page-section" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">products</h2>
            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-6 portfolio-item">
           
            
              <img className="img-fluid" src="images/portfolio/01-full.jpg" alt=""></img>
         
            <div className="portfolio-caption">
              <h4>Threads</h4>
              <p className="text-muted">Illustration</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 portfolio-item">
             
              <img className="img-fluid" src="images/portfolio/02-full.jpg" alt=""></img>
             
            <div className="portfolio-caption">
              <h4>Explore</h4>
              <p className="text-muted">Graphic Design</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 portfolio-item">
             
              <img className="img-fluid" src=" " alt=""></img>
         
            <div className="portfolio-caption">
              <h4>Finish</h4>
              <p className="text-muted">Identity</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 portfolio-item">
             
              <img className="img-fluid" src="images/portfolio/05-full.jpg" alt=""></img>
   
            <div className="portfolio-caption">
              <h4>Lines</h4>
              <p className="text-muted">Branding</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 portfolio-item">
             
              <img className="img-fluid" src="images/portfolio/04-full.jpg" alt=""></img>
             
            <div className="portfolio-caption">
              <h4>Southwest</h4>
              <p className="text-muted">Website Design</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 portfolio-item">
             
              <img className="img-fluid" src="images/portfolio/06-full.jpg" alt=""></img>
         
            <div className="portfolio-caption">
              <h4>Window</h4>
              <p className="text-muted">Photography</p>
            </div>
          </div>
        </div>
                </div>
                </section>
            </div>
        );
    }
}

export default Products;
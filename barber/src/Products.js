// import React, {Component} from 'react';
// import axios from 'axios' ;

// class Products extends Component {

//     render(){
//         return(

//             <div class="container">

//     <div class="row">

//       <div class="col-lg-3">

//         <h1 class="my-4">Shop Name</h1>
//         <div class="list-group">
//           <a href="/" class="list-group-item">Category 1</a>
//           <a href="/" class="list-group-item">Category 2</a>
//           <a href="/" class="list-group-item">Category 3</a>
//         </div>

//       </div>

//       <div class="col-lg-9">

//         <div id="carouselExampleIndicators" class="carousel slide my-4" data-ride="carousel">
//           <ol class="carousel-indicators">
//             <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
//             <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
//             <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
//           </ol>
//           <div class="carousel-inner" role="listbox">
//             <div class="carousel-item active">
//               <img class="d-block img-fluid" src="http://placehold.it/900x350" alt="First slide"/>
//             </div>
//             <div class="carousel-item">
//               <img class="d-block img-fluid" src="http://placehold.it/900x350" alt="Second slide"/>
//             </div>
//             <div class="carousel-item">
//               <img class="d-block img-fluid" src="http://placehold.it/900x350" alt="Third slide"/>
//             </div>
//           </div>
//           <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
//             <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//             <span class="sr-only">Previous</span>
//           </a>
//           <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
//             <span class="carousel-control-next-icon" aria-hidden="true"></span>
//             <span class="sr-only">Next</span>
//           </a>
//         </div>

//         <div class="row">

//           <div class="col-lg-4 col-md-6 mb-4">
//             <div class="card h-100">
//               <a href="/"><img class="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
//               <div class="card-body">
//                 <h4 class="card-title">
//                   <a href="/">Item One</a>
//                 </h4>
//                 <h5>$24.99</h5>
//                 <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
//               </div>
//               <div class="card-footer">
//                 <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
//               </div>
//             </div>
//           </div>
//           </div>

//           </div>
//           </div>


          

   

//   </div>
        
//         );
//     }
// }

// export default Products;


import React, {Component} from 'react';
import axios from 'axios' ;
class Products extends Component {

    componentDidMount(){
        
        
        
        for(var i =1 ; i<8 ; i++){

         
        axios.get(`https://cors-anywhere.herokuapp.com/https://barbernew1.herokuapp.com/products/${i}`)
            .then(data =>{
             var div =  document.createElement("Div")
             var photo =  document.createElement("img")
             var name = document.createElement("p")
             var price = document.createElement("p")
             var des = document.createElement("p")
             
             photo.setAttribute("src", data.data.data.img)
            
             photo.setAttribute("width", "290px");
             photo.setAttribute("height", "228");
             photo.classList.add("img-fluid");
             div.setAttribute("width", "300px");
             div.setAttribute("height", "300px");
             div.setAttribute("style","border:1px; border-style:solid; border-color:#FFf000;padding:10px")
             name.innerHTML = data.data.data.name
             price.innerHTML =data.data.data.price
            des.innerHTML = data.data.data.description
             div.classList.add("col-md-4");
            
             
             div.appendChild(photo)
             div.appendChild(name)
             div.appendChild(des)
             div.appendChild(price)

         var s = document.getElementById("products1")
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
        <div className="row" id="products1">
           
        
    
        </div>
                </div>
                </section>
            </div>
        );
    }
}

export default Products;

import React, { Component } from 'react';
import axios from 'axios' ;

class Reservision extends Component {
    state = {
        name: '',
        branchname: '',
        date:   new Date().getDate(),
        time: new Date().getTime()

      }
      handleChange = event => {
        this.setState({ 
          name: event.target.value ,
       
            
        });
      }
      handleChange2 = event => {
        this.setState({ 
    
          branchname: event.target.value ,
   
            
        });
      }
      handleChange3 = event => {
        this.setState({ 
         
          date: event.target.value 
 
            
        });
      }
      handleChange4 = event => {
        this.setState({ 
         
          time: event.target.value 
            
        });
      }
      handleSubmit = event => {
        event.preventDefault();
        const reservation = {
          name: this.state.name ,
          branchname: this.state.branchname,
          date: this.state.date,
          time: this.state.time
        };
        axios.post(`https://cors-anywhere.herokuapp.com/https://barbernew1.herokuapp.com/reservations`, { reservation })
          .then(res => {
            console.log(res);
            console.log(res.data);
            console.log("lakamv")
          })
      }
      render() {
        return (
          <div>
              <h1>Add Reservision</h1>
            {/* <form onSubmit={this.handleSubmit}>
              <label>
                product name:
                <input type="text" name="name" onChange={this.handleChange} />
              </label>
              
              <button type="submit">Add</button>
            </form> */}
            <section class="page-section" id="contact">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">Contact Us</h2>
          <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <form id="contactForm" name="sentMessage" novalidate="novalidate" onSubmit={this.handleSubmit}>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <input class="form-control" id="name" type="text" placeholder="Your Name *" required="required"   onChange={this.handleChange}/>
                  <p class="help-block text-danger"></p>
                </div>
                <div class="form-group">
                  <input class="form-control" id="name" type="text" placeholder="Branch Name *" required="required"    onChange={this.handleChange2}/>
                  <p class="help-block text-danger"></p>
                </div>
                <div class="form-group">
                  <input class="form-control" id="email" type="date" placeholder="Your Email *" required="required"   onChange={this.handleChange3}/>
                  <p class="help-block text-danger"></p>
                </div>
                <div class="form-group">
                  <input class="form-control" id="phone" type="time" placeholder="Your Phone *" required="required"    onChange={this.handleChange4}/>
                  <p class="help-block text-danger"></p>
                </div>

              </div>
              <div>
              <div id="success"></div>
                <button id="sendMessageButton" class="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
              </div>
              
              
            
             
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
          </div>
        )
      }
}

export default Reservision;
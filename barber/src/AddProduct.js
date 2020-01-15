import React, { Component } from 'react';
import axios from 'axios' ;

class AddProduct extends Component {
    state = {
        name: '',
        description: '',
        img:'',
        price:''

      }
      handleChange = event => {
        this.setState({ name: event.target.value,
            description: event.target.value,
            img: event.target.value,
            price: event.target.value,
        });
      }
      handleSubmit = event => {
        event.preventDefault();
        const product = {
          name: this.state.name ,
          description: this.state.description,
          img: this.state.img,
          price: this.state.price

        };
        axios.post(`https://cors-anywhere.herokuapp.com/https://barbernew1.herokuapp.com/products`, { product })
          .then(res => {
            console.log(res);
            console.log(res.data);
            console.log("lakamv")
          })
      }
      render() {
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
              <label>
                product name:
                <input type="text" name="name" onChange={this.handleChange} />
              </label>
              <label>
                Description :
                <input type="text" name="name" onChange={this.handleChange} />
              </label>
              <label>
                Img url:
                <input type="text" name="name" onChange={this.handleChange} />
              </label>
              <label>
                Product price:
                <input type="text" name="name" onChange={this.handleChange} />
              </label>
              <button type="submit">Add</button>
            </form>
          </div>
        )
      }
}

export default AddProduct;
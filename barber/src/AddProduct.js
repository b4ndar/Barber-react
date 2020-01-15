import React, { Component } from 'react';
import axios from 'axios' ;

class AddProduct extends Component {
    state = {
        name: '',
      }
      handleChange = event => {
        this.setState({ name: event.target.value });
      }
      handleSubmit = event => {
        event.preventDefault();
        const product = {
          name: this.state.name
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
                Person Name:
                <input type="text" name="name" onChange={this.handleChange} />
              </label>
              <button type="submit">Add</button>
            </form>
          </div>
        )
      }
}

export default AddProduct;
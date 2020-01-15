import React, { Component } from 'react';

class CutHeair extends Component {
    render() {
        console.log(this.props.price)
        return (
            <div>
    <h2>{this.props.name}</h2>
    <h4>{this.props.des} </h4>
    <h5>{this.props.price}</h5>

            </div>
        );
    }
}

export default CutHeair;
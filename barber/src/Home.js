import React, { Component } from 'react';
import CutHeair from './CutHeair'

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
                {this.props.cut.map((cutheair)=> (
 <CutHeair  price ={cutheair.price} name={cutheair.title}  des={cutheair.description} ></CutHeair>
                ))
                }
            
            
               
                
            </div>
        );
    }
}

export default Home;
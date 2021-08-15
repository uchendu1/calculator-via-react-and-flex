import React, { Component } from 'react';
import './App.css';
import { Button } from './components/button/Button';
import { Input } from './components/input/Input';
import { ClearButton } from './components/clearButton/ClearButton';
import { SpaceBar } from './components/spacebar/SpaceBar';

import * as math from 'mathjs';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };

    // this.addToInput = this.addToInput.bind(this)
    // no need to bind cos the func is an arrow func.
  }

  // addToInput(){

  // }
  // then the above way will b d way to write the func.ie arrow func saves from writing lots of codes.

addToInput = val => {
  this.setState({ input: this.state.input + val});
};

removeFromInput = () => {
  // console.log(parseInt("1"))
var currentState = (this.state.input);
const newInput = currentState.slice(0,-1)
  this.setState({input: newInput });
} 

handleEqual = () => {
  this.setState({input: math.evaluate(this.state.input)})
}

handleSqrt = () => {

  this.setState({input: Math.sqrt(math.evaluate(this.state.input))})

  }


  handlePower = () => {
    this.setState({input: math.pow(math.evaluate(this.state.input), 2) }) 

  }
  

  render() {
    return (

      <div className="app">
        <div className='calc-wrapper'>
          <Input input={this.state.input} />
          <div className='row'>
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.addToInput}>/</Button>

          </div>
          <div className='row'>
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInput}>*</Button>

          </div>
          
          <div className='row'>
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>+</Button>

          </div>

          <div className='row'>
            <Button handleClick={this.addToInput}>.</Button>
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={()=> this.handleEqual()}>=</Button>
            <Button handleClick={this.addToInput}>-</Button>

          </div>

          <div className='row'>
            <Button handleClick={this.handleSqrt}>sqrt</Button>
            <Button handleClick={this.handlePower}>X^2</Button>
            <Button handleClick={this.addToInput}>(</Button>
            <Button handleClick={this.addToInput}>)</Button>

          </div>
          <div className='row'>
          <SpaceBar handleSpaceBar={this.removeFromInput}>spacebar</SpaceBar>
          </div>

          <div className='row'>
          <ClearButton handleClear={()=>this.setState({input: ""})}>Clear</ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

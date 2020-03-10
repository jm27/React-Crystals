import React, { Component } from 'react';

export default class CrystalImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randInt: Math.floor(Math.random() * (1 - 10)) + 10
    };
  }
  render() {
    return (
      <img className='images' onClick={this.props.getRandNum} alt={this.state.randInt} src={this.props.src}></img>
    );
  }
}
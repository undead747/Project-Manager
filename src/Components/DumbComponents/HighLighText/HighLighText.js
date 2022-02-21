import React, { Component } from 'react';
import './highlightext.css';

export default class HighLighText extends Component {
  render() {
    return (
      <span className='high-ligh-text' style={{color: this.props.color, backgroundColor: this.props.backgroundColor}}>{this.props.text}</span>
    )
  }
}

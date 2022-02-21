import React, { Component } from 'react';
import './button.css';

export default class Button extends Component {
  render() {
    return (
      <button className='btn btn--custom d-flex align-items-center justify-content-center' style={{backgroundColor: this.props.backgroundColor, color: this.props.color}}>
        <span className='btn__icon'>{this.props.icon}</span>
        {this.props.title && <span className='btn__title'>{this.props.title}</span>
        } 
      </button>
    )
  }
}

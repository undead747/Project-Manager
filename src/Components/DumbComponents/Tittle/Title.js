import React, { Component } from 'react';
import './title.css';

export default class Title extends Component {
  displayTitle = (titleArray) => {
    return titleArray.map((title, index) => {
        if(index !== (titleArray.length - 1)) return <span key={index}>{title} / </span>;
        
        return <span key={index}>{title}</span>;
      })
  }

  render() {
    return (
      <h5 className='page-title'>{this.displayTitle(this.props.titles)}</h5>
    )
  }
}

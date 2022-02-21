import React, { Component } from 'react'
import './search-group.css';
import * as AiIcon from 'react-icons/ai';
import Button from '../Button/Button';

export default class SearchGroups extends Component {
  render() {
    return (
      <div className="row g-1 search-group">
          <div className="col-sm-12 col-md-6">
          <input type="text" className="form-control form-control-sm" id="key-word" placeholder='search project' />
          </div>
          <div className='col-sm-12 col-md-4'>
              <select defaultValue={0} className="form-select form-select-sm form-select" aria-label="project-category">
                <option value={0}>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
          </div>
          <div className='col-sm-12 col-md-2 search-group__btn'>
            <Button icon={<AiIcon.AiOutlineSearch />} />
          </div>
      </div>
    )
  }
}

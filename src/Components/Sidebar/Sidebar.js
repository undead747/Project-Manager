import React, { Component, useState } from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import './Sidebar.css';

export default class Sidebar extends Component {
  constructor(props){
    super(props);

    this.state = {
      toggle: false
    }
  }

  toggleTrigger = (e) => {
    this.setState({toggle: !this.state.toggle})
  }; 
  
  setSidebarActive = () => this.state.toggle ? 'sidebar-active' : '';
  
  render() {
    let active = true;
    return (
      <>
        <div className={`side-bar p-2 ${this.setSidebarActive()}`}>
            <div className='side-bar__header m-2'>
                <div className='side-bar__header-logo d-flex justify-content-start'>
                  <FaIcons.FaMediumM className='side-bar__logo-icon' />
                </div>
                <i className='side-bar__toogle-button' onClick={this.toggleTrigger}>
                  <FaIcons.FaBars />
                </i>
            </div>
            <ul className='side-bar__nav-list'>
                <li className='side-bar__nav-item link-active'>
                    <a className='side-bar__nav-item-link d-flex align-items-center'>
                        <i className='side-bar__nav-item-icon'>
                          <FaIcons.FaToolbox />
                        </i>
                        <span className='side-bar__nav-item-name'>Projects</span>
                    </a>

                    <div className='side-bar__nav-item-tool-tip'>Projects</div>
                </li>
                <li className='side-bar__nav-item'>
                    <a className='side-bar__nav-item-link d-flex align-items-center'>
                        <i className='side-bar__nav-item-icon'>
                          <AiIcons.AiFillSetting />
                        </i>
                        <span className='side-bar__nav-item-name'>Settings</span>
                    </a>
                    <span className='side-bar__nav-item-tool-tip'>Settings</span>
                </li>
                <li className='side-bar__nav-item'>
                    <a className='side-bar__nav-item-link d-flex align-items-center'>
                        <i className='side-bar__nav-item-icon'>
                          <AiIcons.AiOutlineFileText/>
                        </i>
                        <span className='side-bar__nav-item-name'>Activities</span>
                    </a>

                    <span className='side-bar__nav-item-tool-tip'>Activities</span>
                </li>
            </ul>

            <div className='side-bar__footer'>
                <div className='side-bar__nav-item'>
                    <a className='side-bar__nav-item-link d-flex align-items-center'>
                        <i className='side-bar__nav-item-icon'>
                            <FaIcons.FaSignOutAlt />
                        </i>
                        <span className='side-bar__nav-item-name'>Sign out</span>
                    </a>

                    <span className='side-bar__nav-item-tool-tip'>Sign out</span>
                </div>
            </div>
        </div>
      </>
    )
  }
}

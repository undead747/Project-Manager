import React, { Component } from 'react'
import * as FaIcons from "react-icons/fa";
import './Sidebar.css';
import { SidebarData } from './SideBarData';
import { Link } from 'react-router-dom';

export default class Sidebar extends Component {
  constructor(props){
    super(props);
    
    this.SidebarData = SidebarData;
    this.SidebarDataLastItem = SidebarData[SidebarData.length - 1];

    this.state = {
      sidebarToggle: false,
      activeLink: this.SidebarData[0].title || null
    }
  }

  sidebarToggle = (e) => {
    this.setState({sidebarToggle: !this.state.sidebarToggle})
  }; 

  linkToggle = (title) => {
    this.setState({activeLink: title});
  }
  
  setSidebarActive = () => this.state.sidebarToggle ? 'sidebar-active' : '';
  
  setLinkActive = (title) => (this.state.activeLink === title) ? 'link-active' : '';

  render() {
    return (
      <>
        <div className={`side-bar ${this.setSidebarActive()}`}>
            <div className='side-bar__header'>
                <div className='side-bar__header-logo'>
                  <FaIcons.FaMediumM className='side-bar__logo-icon' />
                </div>
                <i className='side-bar__toogle-button' onClick={this.sidebarToggle}>
                  <FaIcons.FaBars />
                </i>
            </div>

            <ul className='side-bar__nav-list'>
                {
                  SidebarData && SidebarData.slice(0, -1).map((item, index) => {
                    return (
                      <li className={`side-bar__nav-item ${this.setLinkActive(item.title)}`} key={index}>
                          <Link to={item.path} className='side-bar__nav-item-link d-flex align-items-center' onClick={() => this.linkToggle(item.title)}>
                              <i className='side-bar__nav-item-icon'>
                                  {item.icon}
                              </i>
                              <span className='side-bar__nav-item-name'>{item.title}</span>
                          </Link>

                          <div className='side-bar__nav-item-tool-tip'>{item.title}</div>
                      </li>
                    )
                  })
                }

                {
                  SidebarData[SidebarData.length - 1] && 
                   <li className='side-bar__nav-item side-bar__nav-item--footer'>
                        <Link to={SidebarData[SidebarData.length - 1].path} className='side-bar__nav-item-link side-bar__nav-item-link--footer'>
                            <i className='side-bar__nav-item-icon side-bar__nav-item-icon--footer'>
                                {SidebarData[SidebarData.length - 1].icon}
                            </i>
                            <span className='side-bar__nav-item-name side-bar__nav-item-name--footer'>{SidebarData[SidebarData.length - 1].title}</span>
                        </Link>

                        <span className='side-bar__nav-item-tool-tip'>{SidebarData[SidebarData.length - 1].title}</span>
                    </li>
                }
            </ul>
        </div>
      </>
    )
  }
}

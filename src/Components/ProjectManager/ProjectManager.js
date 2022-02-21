import React, { Component } from 'react';
import Button from '../DumbComponents/Button/Button';
import Paginations from '../DumbComponents/Paginations/Paginations';
import SearchGroups from '../DumbComponents/SearchGroups/SearchGroups';
import Title from '../DumbComponents/Tittle/Title';
import Table from '../Table/Table';
import * as AiIcons from "react-icons/ai";

export default class ProjectManager extends Component {
  render() {
    return (
        <>
            <Title titles={['Project Manager']} />
            <div className='row mt-md-5 align-items-md-center'>
              <div className='mt-4 mt-md-0 col-md-6 col-lg-7'>
                <Button title={'Create Project'} icon={<AiIcons.AiOutlinePlus />} />
              </div>
              <div className='mt-3 m-md-0 col-md-6 col-lg-5'>
                <SearchGroups />
              </div>
            </div>
            <div className='mt-4 mt-lg-5'>
              <Table />
            </div>
            <div className='mt-4 d-flex justify-content-center'>
              <Paginations />
            </div>
        </>
    )
  }
}

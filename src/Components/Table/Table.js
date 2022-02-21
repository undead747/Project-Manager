import React, { Component } from 'react';
import Button from '../DumbComponents/Button/Button';
import './table.css';
import * as Faicon from 'react-icons/fa';
import HighLighText from '../DumbComponents/HighLighText/HighLighText';

export default class Table extends Component {
  render() {
    return (
      <div className='table-wrapper'>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
                <th scope="col">status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td className='align-middle'>Mark</td>
                <td className='align-middle'>Otto</td>
                <td className='align-middle'>@mdo</td>
                <td className='align-middle'>
                    <HighLighText color={"var(--button-color-type-1)"} backgroundColor={"rgb(254, 116, 79, 0.5)"} text={"active"} />
                </td>
                <td className='d-flex gap-1 align-middle'>
                  <Button icon={<Faicon.FaEdit />} backgroundColor={"var(--secondary-color-type-1)"} />
                  <Button icon={<Faicon.FaTrash />} backgroundColor={"var(--button-color-type-2)"} color={"var(--primary-color)"} />
                </td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td className='align-middle'>Mark</td>
                <td className='align-middle'>Otto</td>
                <td className='align-middle'>@mdo</td>
                <td className='align-middle'>
                    <HighLighText color={"var(--button-color-type-1)"} backgroundColor={"rgb(254, 116, 79, 0.5)"} text={"active"} />
                </td>
                <td className='d-flex gap-1 align-middle'>
                  <Button icon={<Faicon.FaEdit />} backgroundColor={"var(--secondary-color-type-1)"} />
                  <Button icon={<Faicon.FaTrash />} backgroundColor={"var(--button-color-type-2)"} color={"var(--primary-color)"} />
                </td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td className='align-middle'>Mark</td>
                <td className='align-middle'>Otto</td>
                <td className='align-middle'>@mdo</td>
                <td className='align-middle'>
                    <HighLighText color={"var(--button-color-type-1)"} backgroundColor={"rgb(254, 116, 79, 0.5)"} text={"active"} />
                </td>
                <td className='d-flex gap-1 align-middle'>
                  <Button icon={<Faicon.FaEdit />} backgroundColor={"var(--secondary-color-type-1)"} />
                  <Button icon={<Faicon.FaTrash />} backgroundColor={"var(--button-color-type-2)"} color={"var(--primary-color)"} />
                </td>
              </tr>
              
            </tbody>
          </table>
      </div>
    )
  }
}

import React, { Component } from 'react';
import './Dropdown.css';

class Dropdown extends Component {
  render() {
    return (
      <select className='component-lib-dropdown'>
        <option value='nik is great'>Nik is great</option>
        <option value='bender is great'>Bender is great</option>
      </select>
    );
  }
}

export default Dropdown;

import React, { useState } from 'react';
import './Filter.css';

const Filter = (props) => {
  return (
    <div>
      <label>Filter By Date</label>
      <select onChange={props.onDropDown}>
        <option value="2024">2024</option>
        <option value="2025">2025</option>
        <option value="2026">2026</option>
        <option value="2027">2027</option>
      </select>
    </div>
  );
};

export default Filter;

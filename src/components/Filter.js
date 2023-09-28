import React, { useState } from 'react';
import './Filter.css';

const Filter = (props) => {
  const dropDownChange = (event) => {
    props.onDropDownChange(event.target.value);
  };
  return (
    <div>
      <label>Filter By Date</label>
      <select value={props.selected} onChange={dropDownChange}>
        <option value="2024">2024</option>
        <option value="2025">2025</option>
        <option value="2026">2026</option>
        <option value="2027">2027</option>
      </select>
    </div>
  );
};

export default Filter;

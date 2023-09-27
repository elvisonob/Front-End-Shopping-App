import React, { useState } from 'react';
import './Filter.css';

const Filter = (props) => {
  const { cartItems } = props;
  const [filterDate, setFilterDate] = useState('2024');

  //setFilterDate(cartItems.filter((items) => items.useByDate === filterDate));

  return (
    <div>
      <label>Filter By Date</label>
      <select>
        <option value="2024">2024</option>
        <option value="2025">2025</option>
        <option value="2026">2026</option>
        <option value="2027">2027</option>
      </select>
    </div>
  );
};

export default Filter;

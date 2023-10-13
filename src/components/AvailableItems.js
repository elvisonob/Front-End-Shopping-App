import React, { useState } from 'react';
import classes from './AvailableItems.module.css';
import britishPie from './../Images/British-Pie.jpg';
import orange from './../Images/orange.jpg';
import potatoes from './../Images/potatoes.jpg';
import rice from './../Images/rice.jpg';
import Filter from './Filter.js';

export const items = [
  {
    id: 'm1',
    name: 'British Pie',
    image: britishPie,
    price: 8.9,
    useByDate: new Date(2024, 6, 25),
  },

  {
    id: 'm2',
    name: 'Orange',
    image: orange,
    price: 7.1,
    useByDate: new Date(2024, 0, 13),
  },

  {
    id: 'm3',
    name: 'Rice',
    image: rice,
    price: 3.4,
    useByDate: new Date(2025, 1, 15),
  },

  {
    id: 'm4',
    name: 'Potatoes',
    image: potatoes,
    price: 4.2,
    useByDate: new Date(2025, 5, 20),
  },
];

const AvailableItems = (props) => {
  const { onAddItem } = props;
  const [filteredYear, setFilteredYear] = useState('');

  const onChangeFilterDate = (filteredYear) => {
    console.log(filteredYear);
    setFilteredYear(filteredYear);
  };

  const filteredArray = items.filter(
    (item) => item.useByDate.getFullYear().toString() === filteredYear
  );

  const arrayToShow = filteredYear === '' ? items : filteredArray;

  return (
    <div className={classes['items-container']}>
      <Filter selected={filteredYear} onDropDownChange={onChangeFilterDate} />
      <ul>
        {arrayToShow.length === 0 ? (
          <div className={classes.display}>
            No selected item for filtered Year
          </div>
        ) : (
          arrayToShow.map((item) => {
            return (
              <div className={classes['list-items']} key={item.id}>
                <h2>{item.name}</h2>
                <li>
                  <img
                    src={item.image}
                    alt="images"
                    width="100%"
                    height="100%"
                  />
                </li>
                <li className={classes['edit-list']}>
                  <div className={classes['list-price']}>
                    <div className={classes.priceAmount}>£{item.price}</div>
                    <div>Use By: {item.useByDate.getFullYear()}</div>
                  </div>

                  <button onClick={() => onAddItem(item)}>Add to Cart</button>
                </li>
              </div>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default AvailableItems;

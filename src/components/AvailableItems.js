import React, { Fragment } from 'react';
import classes from './AvailableItems.module.css';
import mango from './../Images/mango.webp';
import orange from './../Images/orange.jpg';
import potatoes from './../Images/potatoes.jpg';
import rice from './../Images/rice.jpg';

const Items = [
  {
    id: 'm1',
    name: 'mango',
    image: mango,
    price: 8.9,
  },

  { id: 'm2', name: 'Orange', image: orange, price: 7.1 },

  { id: 'm3', name: 'Rice', image: rice, price: 3.4 },

  {
    id: 'm4',
    name: 'Potatoes',
    image: potatoes,
    price: 4.2,
  },
];

const AvailableItems = () => {
  return (
    <div className={classes['items-container']}>
      <ul>
        {Items.map((item) => {
          return (
            <div className={classes['list-items']}>
              <li>{item.name}</li>
              <li>
                <img alt="images" width="50%" height="50%" />
              </li>
              <li className={classes['edit-list']}>
                <div className={classes['list-price']}>{item.price}</div>
                <button>Add to Cart</button>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default AvailableItems;

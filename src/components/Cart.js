import React, { useState } from 'react';
import classes from './Cart.module.css';

const Cart = (props) => {
  const [listOfItems, setListOfItems] = useState([]);

  const displayArray = () => {
    setListOfItems(props.onClick);
  };

  return (
    <div className={classes['cart-container']}>
      <h2>Cart</h2>
      <p>Added Items Display</p>
      <div className={classes['sub-container-column']}>
        {listOfItems.map((items) => (
          <p>{items.props.name}</p>
        ))}
        <p>Quantity</p>
        <button>+</button>
        <button>-</button>
      </div>

      <h2 className={classes['total-amount']}>Total Amount: £50</h2>
    </div>
  );
};

export default Cart;

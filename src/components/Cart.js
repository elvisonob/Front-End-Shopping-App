import React, { useState } from 'react';
import classes from './Cart.module.css';

const Cart = (props) => {
  const { cartItems } = props;
  return (
    <div className={classes['cart-container']}>
      <h2>Cart</h2>
      <div>Added Items Display</div>
      {cartItems.length === 0
        ? 'Cart is Empty'
        : cartItems.map((item) => (
            <div className={classes['sub-container-column']} key={item.id}>
              <div>{item.qty}</div>
              <div>{item.price}</div>
              <button>+</button>
              <button>-</button>
              <div>{item.name}</div>
            </div>
          ))}
      {/* <h2 className={classes['total-amount']}>Total Amount: £50</h2> */}
    </div>
  );
};

export default Cart;

import React, { useState } from 'react';
import classes from './Cart.module.css';

const Cart = (props) => {
  const { cartItems, onAddItem, onRemoveItem } = props;

  const totalAmount = cartItems.reduce(
    (acc, curr) => acc + curr.price * curr.qty,
    0
  );

  return (
    <div className={classes['cart-container']}>
      <h2>Cart</h2>
      <div>Added Items Display</div>
      {cartItems.length === 0
        ? 'Cart is Empty'
        : cartItems.map((item) => (
            <div className={classes['sub-container-column']} key={item.id}>
              <div>
                {item.qty}x{item.price}
              </div>
              <button onClick={() => onAddItem(item)}>+</button>
              <button onClick={() => onRemoveItem(item)}>-</button>
              <div>{item.name}</div>
            </div>
          ))}
      <h2 className={classes['total-amount']}>
        Total Amount: {totalAmount.toFixed(2)}
      </h2>
    </div>
  );
};

export default Cart;

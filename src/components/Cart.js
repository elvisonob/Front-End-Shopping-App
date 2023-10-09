import React, { useState } from 'react';
import classes from './Cart.module.css';
import Modal from './Modal';

const Cart = (props) => {
  const { cartItems, onAddItem, onRemoveItem } = props;

  const totalAmount = cartItems.reduce(
    (acc, curr) => acc + curr.price * curr.qty,
    0
  );

  return (
    <div className={classes['cart-container']}>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <h3 style={{ color: 'red' }}>Cart is Empty</h3>
      ) : (
        cartItems.map((item) => (
          <div className={classes['sub-container-column']} key={item.id}>
            <div>
              {item.qty}x{item.price}
            </div>
            <button onClick={() => onAddItem(item)}>+</button>
            <button onClick={() => onRemoveItem(item)}>-</button>
            <div>{item.name}</div>
            <button onClick={() => props.onSendToModal(item)}>
              Send To Modal
            </button>
          </div>
        ))
      )}
      <h2 className={classes['total-amount']}>
        Total Amount: £{totalAmount.toFixed(2)}
      </h2>
      <button onClick={props.onShowModal}>Check out</button>
    </div>
  );
};

export default Cart;

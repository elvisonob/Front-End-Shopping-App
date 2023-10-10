import React, { useState } from 'react';
import classes from './Modal.module.css';

const Modal = (props) => {
  const { notShowModal, cartItems } = props;

  const totalAmount = cartItems.reduce(
    (acc, curr) => acc + curr.price * curr.qty,
    0
  );

  const onPurchase = () => {
    cartItems.length === 0
      ? alert('Checkout is empty, please add an item')
      : alert(
          'Thank you for purchasing this products, your order has been received'
        );
  };

  return (
    <div className={classes.backDrop}>
      <div className={classes.modal}>
        {cartItems.map((items) => (
          <li key={items.id} className={classes.listing}>
            <div>{items.name}</div>
            <div>
              {items.qty} x £{items.price}
            </div>
          </li>
        ))}
        <h2>Total: £{totalAmount.toFixed(2)}</h2>
        <button onClick={onPurchase}>Purchase</button>
        <button onClick={notShowModal}>Close</button>
      </div>
    </div>
  );
};

export default Modal;

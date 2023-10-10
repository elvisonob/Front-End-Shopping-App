import React, { useState } from 'react';
import classes from './Modal.module.css';

const Modal = (props) => {
  const { notShowModal, cartItems } = props;

  const totalAmount = cartItems.reduce(
    (acc, curr) => acc + curr.price * curr.qty,
    0
  );

  const onPurchase = () => {
    cartItems.length === 1
      ? alert(
          'Thank you for purchasing this product, your order has been received'
        )
      : alert(
          'Thank you for purchasing these products, your orders has been received'
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

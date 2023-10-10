import React, { useState } from 'react';
import classes from './Modal.module.css';

const Modal = (props) => {
  const { notShowModal, cartItems } = props;
  console.log(cartItems);

  const totalAmount = cartItems.reduce(
    (acc, curr) => acc + curr.price * curr.qty,
    0
  );

  return (
    <div className={classes.backDrop}>
      <div className={classes.modal}>
        {cartItems.map((items) => (
          <li key={items.id}>
            <div>{items.name}</div>
            <div>
              {items.qty} x {items.price}
            </div>
            <div>£{totalAmount.toFixed(2)}</div>
            <button>Purchase</button>
            <button onClick={notShowModal}>Close</button>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Modal;

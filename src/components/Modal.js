import React, { useState } from 'react';
import classes from './Modal.module.css';

const Modal = (props) => {
  const { notShowModal, modalContents } = props;

  // const totalAmount = cartItems.reduce(
  //   (acc, curr) => acc + curr.price * curr.qty,
  //   0
  // );

  return (
    <div className={classes.backDrop}>
      {modalContents.map((items) => (
        <div className={classes.modal} key={items.id}>
          <div>{items.name}</div>
          <div>
            {items.qty} x {items.price}
          </div>

          {/* <div>£{totalAmount.toFixed(2)}</div> */}
          <button>Purchase</button>
          <button onClick={notShowModal}>Close</button>
        </div>
      ))}
    </div>
  );
};

export default Modal;

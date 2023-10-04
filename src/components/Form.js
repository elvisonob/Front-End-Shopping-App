import React, { useState } from 'react';
import './Form.css';

const Form = (props) => {
  const [productName, setProductName] = useState('');
  const [productAmount, setProductAmount] = useState('');
  const [errorName, setErrorName] = useState(null);
  const [errorAmount, setErrorAmount] = useState(null);

  const onProductName = (event) => {
    setProductName(event.target.value);
  };

  const onProductAmount = (event) => {
    setProductAmount(event.target.value);
  };

  const onSubmitForm = () => {
    console.log(productName, productAmount);
    props.onManualInput({ productName, productAmount: +productAmount });
  };

  return (
    <div className="form">
      <form>
        <label htmlFor="name">Product Name </label>
        <input type="text" id="name" onChange={onProductName} />
        <br />
        {errorName}
        <br />
        <br />
        {/* <label htmlFor="number">Use by Date</label>
        <input type="date" /> */}
        <label htmlFor="number">Amount </label>
        <input type="number" id="number" onChange={onProductAmount} />
        <br />
        {errorAmount}
      </form>
      <br />
      <button onClick={onSubmitForm}>Add to Cart </button>
    </div>
  );
};

export default Form;

import React, { useState } from 'react';
import './Form.css';

const Form = (props) => {
  const [productName, setProductName] = useState('');
  const [productAmount, setProductAmount] = useState('');
  const [error, setError] = useState(null);

  const onProductName = (event) => {
    setProductName(event.target.value);
  };

  const onProductAmount = (event) => {
    setProductAmount(event.target.value);
  };

  const onSubmitForm = () => {
    if (productName.trim() === '' || productAmount.trim() === '') {
      return setError('Please ensure you fill both columns');
    } else if (productAmount < 0 || productAmount === '0') {
      return setError('Please add a valid amount');
    }
    console.log(productName, productAmount);
    props.onManualInput({ productName, productAmount: +productAmount });

    setError('');
    setProductAmount('');
    setProductName('');
  };

  return (
    <div className="form">
      <div className="control-group">
        <form>
          <label htmlFor="name">Product Name </label>
          <input
            type="text"
            id="name"
            onChange={onProductName}
            value={productName}
          />
          <br />
          <br />
          <label htmlFor="number">Amount </label>
          <input
            type="number"
            id="number"
            onChange={onProductAmount}
            value={productAmount}
          />
          <br />
          <div style={{ color: 'red' }}>{error}</div>
        </form>
        <br />
        <button onClick={onSubmitForm}>Add to Cart </button>
        <button onClick={props.onClickButton}>Close</button>
      </div>
    </div>
  );
};

export default Form;

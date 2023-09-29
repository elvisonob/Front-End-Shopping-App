import React from 'react';
const Form = () => {
  return (
    <div>
      <form>
        <label htmlFor="name">Product Name</label>
        <input type="text" id="name" />
        <label htmlFor="number">Use by Date</label>
        <input type="date" />
        <label htmlFor="number">Amount</label>
        <input type="number" id="number" />
      </form>
      <button>Add to Cart</button>
    </div>
  );
};

export default Form;

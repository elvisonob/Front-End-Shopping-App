import React, { useState } from 'react';
import AvailableItems from './AvailableItems';
import Cart from './Cart.js';
import Form from './Form.js';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [addProductManually, setAddProductManually] = useState(false);

  const onAddItem = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...existingItem, qty: existingItem.qty + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemoveItem = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem.qty === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...existingItem, qty: existingItem.qty - 1 }
            : item
        )
      );
    }
  };

  const onAddItemManually = (manualInput) => {
    setCartItems([
      ...cartItems,
      {
        ...manualInput,
        id: Math.random(),
        name: manualInput.productName,
        price: manualInput.productAmount,
        qty: 1,
      },
    ]);
  };

  const onOpenProductForm = () => {
    setAddProductManually(true);
  };

  const onCloseProductForm = () => {
    setAddProductManually(false);
  };
  return (
    <div>
      <AvailableItems onAddItem={onAddItem} />
      <button onClick={onOpenProductForm}>Add Product Manually</button>
      {addProductManually && (
        <Form
          onClickButton={onCloseProductForm}
          onManualInput={onAddItemManually}
        />
      )}
      <Cart
        onAddItem={onAddItem}
        onRemoveItem={onRemoveItem}
        cartItems={cartItems}
      />
    </div>
  );
};

export default App;

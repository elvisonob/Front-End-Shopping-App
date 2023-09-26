import React, { useState } from 'react';
import AvailableItems from './AvailableItems';
import Cart from './Cart.js';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

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
  return (
    <div>
      <AvailableItems onAddItem={onAddItem} />
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default App;

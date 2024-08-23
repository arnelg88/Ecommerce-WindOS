import React, { useState } from 'react';

export const ItemQuantifySelector = () => {

  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prevQuantity => (prevQuantity > 0 ? prevQuantity - 1 : 0));
  };

  return (
    <>
      <button className='quantity' onClick={decreaseQuantity}>-</button>
      <span className='quantity'>{quantity}</span>
      <button className='quantity' onClick={increaseQuantity}>+</button>
    </>
  );
};

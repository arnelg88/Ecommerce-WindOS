import React from 'react';

export const ItemQuantifySelector = ({ quantity, setQuantity, stock }) => {

  const increaseQuantity = () => {
    setQuantity(prevQuantity => {
      if (prevQuantity < stock) {
        return prevQuantity + 1;
      } else {
        return prevQuantity; 
      }
    });
  };

  const decreaseQuantity = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <>
      <button className='quantity' onClick={decreaseQuantity}>-</button>
      <span className='quantity'>{quantity}</span>
      <button className='quantity' onClick={increaseQuantity}>+</button>
      <p>Stock disponible: {stock}</p>
    </>
  );
};

import React, { useState } from 'react';
import './ItemDetail.css';
import HoverRating from '../Rating/Rating';
import { ItemQuantifySelector } from '../ItemQuantifySelector/ItemQuantifySelector';
import AddItemButton from '../AddItemButton/AddItemButton';
import { useCart } from '../../Elements/Main/CartContext/CartContext';

export const ItemDetail = ({ id, imageSrc, title, description, price, stock }) => {
  const [quantity, setQuantity] = useState(1);
  const { addItemToCart } = useCart();

  const product = { id, title, description, price };

  const handleAddToCart = () => {
    addItemToCart(product, quantity);
  };

  return (
    <section className="layoutContainer">
      <div>
        <img className='imgContainer' src={imageSrc} alt={title} />
      </div>
      <div className="grow1">
        <h3>{title}</h3>
        <HoverRating />
        <span className='SpanInfo'>{description}</span>
        <span className='SpanInfo'>Price: {price}</span>
        <div>
          <ItemQuantifySelector quantity={quantity} setQuantity={setQuantity} stock={stock} />
        </div>
        <div className='center'>
          <AddItemButton onClick={handleAddToCart} />
        </div>
      </div>
    </section>
  );
};

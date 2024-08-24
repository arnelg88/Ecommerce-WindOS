import React from 'react';
import { useCart } from "../../Elements/Main/CartContext/CartContext";

export const Brief = () => {
  const { cart, removeFromCart } = useCart();

  const totalAPagar = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      <div className="ContainerCheckout">
        {cart.length === 0 ? (
          <p>No hay productos en el carrito.</p>
        ) : (
          <>
            {cart.map((item, index) => (
              <div key={index} className="ProductItem">
                <h3>{item.title}</h3>
                <span className='SpanInfo'>{item.description}</span>
                <span className='SpanInfo'>Price: {item.price * item.quantity}</span>
                <span className='SpanInfo'>Cantidad: {item.quantity}</span>
                <span className="RemoveItem" onClick={() => removeFromCart(item.id)}>
                  Eliminar
                </span>
              </div>
            ))}
            <div className="Total">
              <h3>Total a pagar: {totalAPagar}</h3>
            </div>
          </>
        )}
      </div>
    </>
  );
};

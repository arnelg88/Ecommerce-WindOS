import React from 'react';
import './Main.css'; 
import CardProducts from '../../Tools/CardProducts/CardProducts';
import { useParams } from 'react-router-dom';
import productsData from '../../Source/Data/data.json';

const ItemDetailContainer = ({ message }) => {
  const { id } = useParams();
  const product = productsData.find(item => item.id === parseInt(id));

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <main className="main-content">
      <h1>{message}</h1>
      <section className='layout'>
        <div>
          <CardProducts 
            id={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            image={product.image}
          />
        </div>
      </section>
    </main>
  );
};

export default ItemDetailContainer;

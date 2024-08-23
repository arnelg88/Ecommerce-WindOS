import React from 'react';
import './Main.css'; 
import { useParams } from 'react-router-dom';
import productsData from '../../Source/Data/data.json';
import { ItemDetail } from '../../Tools/CardDetailProduct/ItemDetail';


const ItemDetailContainer = ({ message }) => {
  const { id } = useParams();
  const product = productsData.find(item => item.id === parseInt(id));

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <main className="main-content">
      <h3>{message}</h3>
      <section className='layoutDetail'>
        <div className="containerCard" >
        <ItemDetail/>
        </div>
      </section>
    </main>
  );
};

export default ItemDetailContainer;

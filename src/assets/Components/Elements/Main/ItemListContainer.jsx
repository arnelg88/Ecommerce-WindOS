import React, { useEffect, useState } from 'react';
import './Main.css'; 
import CardProducts from '../../Tools/CardProducts/CardProducts';
import productsData from '../../Source/Data/data.json'; 

const ItemListContainer = ({ message, category }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    new Promise((resolve) => {
      setTimeout(() => resolve(productsData), 2000);
    })
      .then((response) => {
        if (category) {
          return response.filter(item => item.description.toLowerCase().includes(category.toLowerCase()));
        }
        return response;
      })
      .then((filteredItems) => {
        setItems(filteredItems);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [category]);

  if (loading) return "Loading...";

  return (
    <main className="main-content">
      <h1>{message}</h1>
      <section className='layout'>
        {items.map((item) => (
          <div key={item.id} className="card-wrapper">
            <CardProducts 
              id={item.id}
              title={item.title} 
              description={item.description} 
              price={item.price} 
              image={item.image} 
            />
          </div>
        ))}
      </section>
    </main>
  );
};

export default ItemListContainer;

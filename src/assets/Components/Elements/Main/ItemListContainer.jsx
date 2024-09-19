import React, { useEffect, useState } from 'react';
import CardProducts from '../../Tools/CardProducts/CardProducts';
import { db } from '../../Source/Data/firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { EmblaCarousel } from '../../Tools/Carrusel/Carrusel';

const ItemListContainer = ({ category }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const itemsCollection = collection(db, "items");
        
        let q;
        if (category) {
          q = query(itemsCollection, where("categoryId", "==", category));
        } else {
          q = itemsCollection;
        }

        const querySnapshot = await getDocs(q);
        const itemsArray = querySnapshot.docs.map(doc => ({
          id: doc.id, ...doc.data()
        }));
        setItems(itemsArray);
      } catch (error) {
        console.error("Error fetching items: ", error);
      }
    };

    fetchItems();
  }, [category]);

  return (
    <main className="main-content">
   <EmblaCarousel />
      <section className='layout'>
        {items.map(item => (
          <CardProducts 
            key={item.id} 
            id={item.id}  
            title={item.title}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </section>
    </main>
  );
};

export default ItemListContainer;

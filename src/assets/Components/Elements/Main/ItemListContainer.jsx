import React, { useEffect, useState } from 'react';
import CardProducts from '../../Tools/CardProducts/CardProducts';
import { db } from '../../Source/Data/firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { EmblaCarousel } from '../../Tools/Carrusel/Carrusel';
import { Encabezados } from '../../Tools/Encabezados/Encabezados';
import IcBaselineStarBorder from '../../Icons/IconStar';
import { CardDestacado } from '../../Tools/CardDestacado/CardDestacado';
import IcBaselineWorkspacePremium from '../../Icons/IconPremium';

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
      <div className='container_carrusel'>   
        <EmblaCarousel />
      </div>
      <div className='center'>
        <Encabezados />
      </div>
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
    <section className="sectionDestacados">
      <div className="containerDestacado">
      <IcBaselineStarBorder/>
        <h3 className="marginText">Destacados</h3>
      </div>
      <div className="slider">
        <div className="slider-mask">
          <div className="slider-content center" style={{ display: 'flex'}}>
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
          </div>
        </div>
      </div>
    </section>
    <section className="sectionDestacados">
      <div className="containerDestacado">
      <IcBaselineWorkspacePremium/>
        <h3 className="marginText">Lo más vendido</h3>
      </div>
      <div className="slider">
        <div className="slider-mask">
          <div className="slider-content center" style={{ display: 'flex' }}>
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
          </div>
        </div>
      </div>
    </section>
    </main>
  );
};

export default ItemListContainer;

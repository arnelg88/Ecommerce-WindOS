import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../Source/Data/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import './Main.css';
import { ItemDetail } from '../../Tools/CardDetailProduct/ItemDetail';

const ItemDetailContainer = ({ message }) => {
  const { id } = useParams(); 
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const docRef = doc(db, "items", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setItem({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.error("No such document!");
        }
      } catch (error) {
        console.error("Error fetching item: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="main-content">
      <h1>{message}</h1>
      {item ? (
        <ItemDetail 
          id={item.id}
          imageSrc={item.image}
          title={item.title}
          description={item.description}
          price={item.price}
          stock={item.stock} 
        />
      ) : (
        <div>Product not found</div>
      )}
    </main>
  );
};

export default ItemDetailContainer;

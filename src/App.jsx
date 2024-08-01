import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './assets/Components/Elements/NavBar/NavBar';
import './App.css';
import ItemListContainer from './assets/Components/Elements/Main/ItemListContainer';
import ItemDetailContainer from './assets/Components/Elements/Main/ItemDetailContainer';

function App() {
  const [category, setCategory] = useState('');

  return (
    <BrowserRouter>
      <div className="outer-container">
        <div className="centered-container">
          <NavBar setCategory={setCategory} />
          <Routes>
            <Route path="/" element={<ItemListContainer category={category} />} />
            <Route path="/category/:categoryId" element={<ItemListContainer message="Tienda de equipos" />} />
            <Route path="/item/:id" element={<ItemDetailContainer message="Detalles del producto" />} />
            <Route path="*" element={<div>404 - Página no encontrada</div>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

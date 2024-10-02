import React, { useState } from "react";
import { Link } from "react-router-dom";
import './NavBar.css';
import { CartWidget } from '../../Tools/CartWidget/CartWidget';
import { useCart } from "../Main/CartContext/CartContext";
import { InputSearch } from "../../Tools/In/InputSearch";

const NavBar = ({ setCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  
  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    setCategory(categoryId);
  };
  const { cart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <>
      <header>
        <div className="header">
          <nav className="navbar">
          <div>
            <Link to="/" className="logoName" onClick={() => handleCategorySelect('')}>
              <img className="logo" alt="logo" src="src/assets/Components/Source/img/imagelogo.png" />
              <h3 className="titlelogo">Electronics</h3>
            </Link>
            </div>
            <div className="navbar-center">
              <InputSearch />
            </div>
            <div className="navbar-right">
              <Link to="/checkout">
                <CartWidget />
                <span>{totalItems}</span>
                </Link>
              {/* <PositionedMenu setCategory={handleCategorySelect} /> */}
              <a href="">Iniciar sesion                
              </a>
            </div>
          </nav>
          <div className="center">
            <a className="NavCategorias" href="">TV y Audio</a>
            <a className="NavCategorias" href="">Celulares y Tecnología</a>
            <a className="NavCategorias" href="">Electrodomesticos</a>
          </div>
          <div className="background-image"></div>
        </div>
      </header>
    </>
  );
};

export default NavBar;

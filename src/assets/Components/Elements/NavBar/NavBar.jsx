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
              <img className="logo" alt="logo" src="https://previews.dropbox.com/p/thumb/ACaQgcvX8rUMCetrc_CfTHbsjEi6VSkn1WFZ0_zPbK_F2wh3I9_K6S37UbpMyNPMbJ7c-1ONCCvBm0dTmRPT9cdK2AZt-uqcIrZS08ON5FteCkwJPaxXjoOE1ZJbI_1AB1FOXVHAFA6NrKp8g8SLoRE2iOtrT5Yei3FLl01PtFhtONAzQ3njbQ2SRKuN-_gG6_1rdO07cTmKF5xMVtv1_ru3rFCHmerceqMpUTyD7122TKaY7uJ-PzMJwlbYN9stLvj-bItNY_KjWLWRaNrcKWkPEI7tvSZALD2Ws6LJwjKgl5TaBp0MwJzUbelv82m-CJvvIY46RSCuR_XP5SCp1lyM/p.png?is_prewarmed=true" />
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

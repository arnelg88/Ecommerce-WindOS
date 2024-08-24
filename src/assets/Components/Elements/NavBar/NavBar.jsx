import React, { useState } from "react";
import { Link } from "react-router-dom";
import './NavBar.css';
import PositionedMenu from "../../Tools/MenuCategory/MenuCategory";
import { CartWidget } from '../../Tools/CartWidget/CartWidget';
import FlexDivider from "../../Tools/Divider/Divider";
import { useCart } from "../Main/CartContext/CartContext";

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
            <Link to="/" className="logoName" onClick={() => handleCategorySelect('')}>
              <img className="logo" alt="logo" src="https://previews.dropbox.com/p/thumb/ACVJttx3OR9M00BSJn5MAarNl93YK6Xv2l5Pw6p1dGaLO4F8EKiu5xGuYVn-Q3tc-2BHUevdccVabLA5wa1s_e1D_ZqBDVPA2g-CV1RYpVaKwhFJiw8tmWibcdm11wYe6lxja72CLL-Q6fVbWIXDPpDNRvDBSYPXAuCpbFWSro3oRooe8hO0G-0RLhGEEfm4cxQzFgKY70RnrpV70nfti2sT2RV-nL_UhlWggaBN-QTmVgwzA0-biUOT2Y306i3IShSphk5LC-AX77deUd2DlGhXloiaj4_9KwTkClvOGPHQjijeIQm93sXHJShKYTTFD_4zljfJx-MakQeci_aBcKN9/p.png?is_prewarmed=true" />
              <h3>WindOS</h3>
            </Link>
            <div className="navbar-center"></div>
            <div className="navbar-right">
              <Link to="/checkout">
                <CartWidget />
                <span>{totalItems}</span>
                </Link>
              <PositionedMenu setCategory={handleCategorySelect} />
            </div>
          </nav>
          <div className="background-image"></div>
        </div>
      </header>
      <FlexDivider />
    </>
  );
};

export default NavBar;

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
              <img className="logo" alt="logo" src="https://previews.dropbox.com/p/thumb/ACaVDbxQFXF59mKdSJdR9zSBGqq1kijwJk94BrZ_fxxHTiz1LG7l6nWeuu30ghfnh87brGyZogFDchgkf4aWdJgHf5zdLq2Kz6Y7z4vCQMPPfjRE_JEuXsfnOBoGL5lbOrcCp2HnQh_SR8aEWj2fkdfUylENXe3IjJfGShaZJKJXmjZMkFUqSMk8LaGH8hvunCA6KxDGN8m5aaMzMhRZ1VCr34XubOX53t-LtoEmZ12mvQWGFlrJspQKppnWAPWbVVBH6moIWhFllmbfJormHHHHr_y6p2M-RAOr9IAakMN8jtqPs7mK_JXNm1YXEK-jxK0/p.png" />
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

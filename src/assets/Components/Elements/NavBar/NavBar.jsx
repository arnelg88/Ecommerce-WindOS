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
              <img className="logo" alt="logo" src="https://previews.dropbox.com/p/thumb/ACY1t_PQNCSsVAg0VvQbsv4fNoF3AJuLy2n4JiZk9EHZRNnS54MUzUays-xugZuOtnJFd8hCNhZlUfsmN4c8Ow4AFZegWCQM7RUkBGO4Lw10XNMgOz3Ygjy4a1pYi6KF7XPJdGSHLSCjhczT9od9NzjfrZtWJpy5rPvcIiOCsgX33t3mXqlqO_zV_0tVj_3F4Kybvsze2yb2fAbZiSByBIWrnL6qoIYPYw4q2vrphmDFUbn09I5jERzybpEPoTPkoPCYHltykNIjptKI6vP90PR5P8XURjZLi7MLljvdUCVceBcGc5uinyLgpyj7yYpxLf1wc7B1g6SO6GHLu0IZ_a6W/p.png?is_prewarmed=true" />
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

import React from "react";
import { Link } from "react-router-dom";
import BtnGroup from "../../Tools/BtnGroup/BtnGroup";
import './NavBar.css';
import PositionedMenu from "../../Tools/MenuCategory/MenuCategory";
import { CartWidget } from '../../Tools/CartWidget/CartWidget';
import FlexDivider from "../../Tools/Divider/Divider";

const NavBar = ({ setCategory }) => (
  <>
    <header>
      <div className="header">
        <nav className="navbar">
          <Link to="/" className="logoName" onClick={() => setCategory('')}>
            <img src="src/assets/Components/Source/img/icons8-jira.svg" className="logo" alt="logo" />
            <h3>WindOS</h3>
          </Link>
          <div className="navbar-center"></div>
          <div className="navbar-right">
            <Link to="/category/:categoryId">
              <CartWidget />
              <span>2</span>
            </Link>
            <PositionedMenu setCategory={setCategory} />
            <BtnGroup />
          </div>
        </nav>
        <div className="background-image"></div>
      </div>
    </header>
    <FlexDivider />
  </>
);

export default NavBar;

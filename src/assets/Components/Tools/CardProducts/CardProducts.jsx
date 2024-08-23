import React from 'react';
import './CardProducts.css';
import FlexDivider from '../Divider/Divider';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@radix-ui/react-icons'

export default function CardProducts({ id, title, description, price, image }) {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-img">
          <div className="img">
            <img src={image} alt={title} className="img" />
          </div>
        </div>
        <div className="card-title">{title}</div>
        <div className="card-subtitle">{description}</div>
        <FlexDivider />
        <div className="card-footer">
          <div className="card-price"><span>$</span>{price}</div>
          <Link to={`/item/${id}`} className="card-btn">
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { ShoppingCart } from '@mui/icons-material';

const AddItemButton = ({ onClick }) => (
  <>
    <button className='AddCart' onClick={onClick}>
      <ShoppingCart />
    </button>
  </>
);

export default AddItemButton;

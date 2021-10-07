import React from 'react';
import { ICart } from '../models/ICart';

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
} as ICart);

export default CartContext;

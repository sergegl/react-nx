import { useState } from 'react';
import Cart from './components/cart/cart';
import Header from './components/layout/header/header';
import Meals from './components/meals/meals';
import './food-order-lib.module.scss';
import CartProvider from './store/cart-provider';

/* eslint-disable-next-line */
export interface FoodOrderLibProps {}

export function FoodOrderLib(props: FoodOrderLibProps) {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler}></Header>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default FoodOrderLib;

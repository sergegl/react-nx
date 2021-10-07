import { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import { CartIcon } from '../../cart/cart-icon/cart-icon';
import classes from './header-cart-button.module.scss';

/* eslint-disable-next-line */
export interface HeaderCartButtonProps {
  onClick?: () => void;
}

export function HeaderCartButton(props: HeaderCartButtonProps) {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
    return currNumber + Number(item.amount);
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;

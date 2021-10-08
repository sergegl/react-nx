import { useContext, useEffect, useState } from 'react';
import CartContext from '../../../store/cart-context';
import { CartIcon } from '../../cart/cart-icon/cart-icon';
import classes from './header-cart-button.module.scss';

/* eslint-disable-next-line */
export interface HeaderCartButtonProps {
  onClick?: () => void;
}

export function HeaderCartButton(props: HeaderCartButtonProps) {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const cartCtx = useContext(CartContext);
  /**
   * object destructioning
   * then contexct triggers re rerended, we pick up 'items' as a changed property
   * and use it as effect's dependancy
   */
  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((currNumber, item) => {
    return currNumber + Number(item.amount);
  }, 0);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ''
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;

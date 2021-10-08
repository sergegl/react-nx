import { useContext } from 'react';
import { IMeal } from '../../models/IMeal';
import CartContext from '../../store/cart-context';
import Modal from '../ui/modal/modal';
import CartItem from './cart-item/cart-item';
import classes from './cart.module.scss';

/* eslint-disable-next-line */
export interface CartProps {
  onClose?: () => void;
  onOpen?: () => void;
}

export function Cart(props: CartProps) {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemAddHandler = (item: IMeal) => {
    const tempItem: IMeal = { ...item, amount: 1 };
    cartCtx.addItem && cartCtx.addItem(tempItem);
  };

  const cartItemRemoveHandler = (id: string) => {
    cartCtx.removeItem && cartCtx.removeItem(id);
  };

  /**
   * renders list of meal items
   */
  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;

import { IMeal } from '../../models/IMeal';
import Modal from '../ui/modal/modal';
import classes from './cart.module.scss';

/* eslint-disable-next-line */
export interface CartProps {
  onClose?: () => void;
  onOpen?: () => void;
}

export function Cart(props: CartProps) {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((item) => (
        <li>item.name</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;

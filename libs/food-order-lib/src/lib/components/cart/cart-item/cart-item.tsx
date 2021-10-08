import { IMeal } from '../../../models/IMeal';
import classes from './cart-item.module.scss';

/* eslint-disable-next-line */
export interface CartItemProps {
  item: IMeal;
  onRemove: () => void;
  onAdd: () => void;
}

export function CartItem({ item, onAdd, onRemove }: CartItemProps) {
  const price = `$${item.price.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{item.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {item.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onRemove}>−</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
}

export default CartItem;

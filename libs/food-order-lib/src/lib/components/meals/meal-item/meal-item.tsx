import { useContext } from 'react';
import { IMeal } from '../../../models/IMeal';
import CartContext from '../../../store/cart-context';
import MealItemForm from '../meal-item-form/meal-item-form';
import classes from './meal-item.module.scss';

/* eslint-disable-next-line */
export interface MealItemProps {
  meal: IMeal;
}

export function MealItem({ meal }: MealItemProps) {
  const cartCtx = useContext(CartContext);
  const price = `$${meal.price.toFixed(2)}`;

  const addToCartHandler = (amount: number): void => {
    const item: IMeal = {
      id: meal.id,
      name: meal.name,
      description: meal.description,
      price: meal.price,
      amount: amount,
    };

    cartCtx.addItem && cartCtx.addItem(item);
  };

  return (
    <li className={classes.meal} key={meal.id}>
      <div>
        <h3>{meal.name}</h3>
        <div className={classes.description}>{meal.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} id={meal.id} />
      </div>
    </li>
  );
}

export default MealItem;

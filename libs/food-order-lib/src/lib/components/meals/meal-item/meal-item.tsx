import { IMeal } from '../../../models/IMeal';
import MealItemForm from '../meal-item-form/meal-item-form';
import classes from './meal-item.module.scss';

/* eslint-disable-next-line */
export interface MealItemProps {
  meal: IMeal;
}

export function MealItem({ meal }: MealItemProps) {
  const price = `$${meal.price.toFixed(2)}`;
  return (
    <li className={classes.meal} key={meal.id}>
      <div>
        <h3>{meal.name}</h3>
        <div className={classes.description}>{meal.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={meal.id} />
      </div>
    </li>
  );
}

export default MealItem;

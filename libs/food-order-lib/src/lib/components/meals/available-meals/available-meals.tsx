import { DUMMY_MEALS } from '../../../data/dummy-meals';
import Card from '../../ui/card/card';
import MealItem from '../meal-item/meal-item';
import classes from './available-meals.module.scss';

export function AvailableMeals() {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem key={meal.id} meal={meal} />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;

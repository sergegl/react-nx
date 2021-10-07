import AvailableMeals from './available-meals/available-meals';
import MealsSummary from './meals-summary/meals-summary';
import './meals.module.scss';

/* eslint-disable-next-line */
export interface MealsProps {}

export function Meals(props: MealsProps) {
  return (
    <>
      <MealsSummary></MealsSummary>
      <AvailableMeals></AvailableMeals>
    </>
  );
}

export default Meals;

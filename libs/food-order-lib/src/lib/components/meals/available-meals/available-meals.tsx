import { DUMMY_MEALS } from '../../../data/dummy-meals';
import { useEffect, useState } from 'react';
import Card from '../../ui/card/card';
import MealItem from '../meal-item/meal-item';
import classes from './available-meals.module.scss';
import { IMeal } from '../../../models/IMeal';

export function AvailableMeals() {
  const [meals, setMeals] = useState<IMeal[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        'https://react-http-1cac9-default-rtdb.firebaseio.com/meals.json'
      );

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const responseData: IMeal[] = await response.json();
      const loadedMeals: IMeal[] = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          amount: 1,
          name: responseData[key].name,
          price: responseData[key].price,
          description: responseData[key].description,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes['meals-loading']}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes['meals-error']}>
        <p>{httpError}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => <MealItem key={meal.id} meal={meal} />);

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;

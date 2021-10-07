import styles from './app.module.scss';
import { FoodOrderLib } from '@react-nx/food-order-lib';

export function App() {
  return (
    <div className={styles.app}>
      <FoodOrderLib />
    </div>
  );
}

export default App;

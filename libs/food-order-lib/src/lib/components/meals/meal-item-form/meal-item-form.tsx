import { useRef } from 'react';
import Input from '../../ui/input/input';
import classes from './meal-item-form.module.scss';

/* eslint-disable-next-line */
export interface MealItemFormProps {
  id: string;
}

export function MealItemForm(props: MealItemFormProps) {
  const amountInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent): void => {
    event.preventDefault();
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: `amount_${props.id}`,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
    </form>
  );
}

export default MealItemForm;

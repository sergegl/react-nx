import { IInput } from '../../../models/IInput';
import classes from './input.module.scss';
import React from 'react';

/* eslint-disable-next-line */
export interface InputProps {
  label: string;
  input: IInput;
}

const Input = React.forwardRef(
  (props: InputProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    return (
      <div className={classes.input}>
        <label className={classes.label} htmlFor={props.input.id}>
          {props.label}
        </label>
        <input {...props.input} ref={ref} />
      </div>
    );
  }
);

export default Input;

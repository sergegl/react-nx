import classes from './checkout.module.scss';
import { useRef, useState } from 'react';
import { IAddress } from '../../../models/iAddress';

const isEmpty = (value: string): boolean => value.trim() === '';
const isFiveChar = (value: string): boolean => value.trim().length === 5;

/* eslint-disable-next-line */
export interface CheckoutProps {
  onCancel: () => void;
  onConfirm: (userData: IAddress) => void;
}

export function Checkout(props: CheckoutProps) {
  const [formInputValidity, setInputValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const nameInputRef = useRef<HTMLInputElement>(null);
  const streetInputRef = useRef<HTMLInputElement>(null);
  const postalCodeInputRef = useRef<HTMLInputElement>(null);
  const cityInputRef = useRef<HTMLInputElement>(null);

  const confirmHandler = (event: React.FormEvent): void => {
    event.preventDefault();

    const enteredName = nameInputRef.current?.value as string;
    const enteredStreet = streetInputRef.current?.value as string;
    const enteredPostalCode = postalCodeInputRef.current?.value as string;
    const enteredCity = cityInputRef.current?.value as string;

    const enteredNameIsValid = !isEmpty(enteredName as string);
    const enteredStreetIsValid = !isEmpty(enteredStreet as string);
    const enteredPostalCodeIsValid = isFiveChar(enteredPostalCode as string);
    const enteredCityIsValid = !isEmpty(enteredCity as string);

    setInputValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postalCode: enteredPostalCodeIsValid,
      city: enteredCityIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalCodeIsValid &&
      enteredCityIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostalCode,
    });
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div
        className={`${classes.control} ${
          !formInputValidity.name && classes.invalid
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputValidity.name && <p>Please entered a valid name.</p>}
      </div>
      <div
        className={`${classes.control} ${
          !formInputValidity.street && classes.invalid
        }`}
      >
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputValidity.street && <p>Please entered a valid street.</p>}
      </div>
      <div
        className={`${classes.control} ${
          !formInputValidity.postalCode && classes.invalid
        }`}
      >
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
        {!formInputValidity.postalCode && (
          <p>Please entered a valid postal code (5 characters long)!</p>
        )}
      </div>
      <div
        className={`${classes.control} ${
          !formInputValidity.city && classes.invalid
        }`}
      >
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputValidity.city && <p>Please entered a valid city.</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
}

export default Checkout;

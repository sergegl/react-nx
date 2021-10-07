import classes from './header.module.scss';
import mealsImage from '../../../assets/meals.jpg';
import HeaderCartButton from '../header-cart-button/header-cart-button';

/* eslint-disable-next-line */
export interface HeaderProps {
  onShowCart?: () => void;
}

export function Header(props: HeaderProps) {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </>
  );
}

export default Header;

import classes from './card.module.scss';

/* eslint-disable-next-line */
export interface CardProps {
  className?: string;
  children?: React.ReactNode;
}

export function Card({ children, className }: CardProps) {
  return <div className={`${classes.card} ${className}`}>{children}</div>;
}

export default Card;

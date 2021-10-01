import style from './card.module.scss';
import { ReactNode } from 'react';

/* eslint-disable-next-line */
export interface CardProps {
  children?: ReactNode;
  className?: string;
}

export function Card(props: CardProps) {
  const classes = `${style.card} ${props?.className}`;

  return <div className={classes}>{props?.children}</div>;
}

export default Card;

import style from './button.module.scss';
import { ReactNode } from 'react';

/* eslint-disable-next-line */
export interface ButtonProps {
  type?: 'submit' | 'button';
  children?: ReactNode;
  className?: string;
  onClick?: (event: React.FormEvent<EventTarget>) => void;
}

export function Button({ type, className, children, onClick }: ButtonProps) {
  const classes = `${style.button} ${className}`;

  return (
    <button type={type || 'button'} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;

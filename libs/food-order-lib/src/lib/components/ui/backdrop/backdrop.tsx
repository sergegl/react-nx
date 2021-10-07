import classes from './backdrop.module.scss';

/* eslint-disable-next-line */
export interface BackdropProps {
  className?: string;
  onClose?: () => void;
}

export function Backdrop({ className, onClose }: BackdropProps) {
  return (
    <div onClick={onClose} className={`${classes.backdrop} ${className}`}></div>
  );
}

export default Backdrop;

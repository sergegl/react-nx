import classes from './modal-overlay.module.scss';

/* eslint-disable-next-line */
export interface ModalOverlayProps {
  children?: React.ReactNode;
}

export function ModalOverlay(props: ModalOverlayProps) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
}

export default ModalOverlay;

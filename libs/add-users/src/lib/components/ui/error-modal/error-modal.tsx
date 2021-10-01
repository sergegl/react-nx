import { IModal } from '../../../models/IModal';
import Button from '../button/button/button';
import Card from '../card/card';
import style from './error-modal.module.scss';

/* eslint-disable-next-line */
export interface ErrorModalProps extends IModal {
  onConfirm?: (
    event: React.FormEvent<EventTarget> | React.ChangeEvent<HTMLInputElement>
  ) => void;
}

export function ErrorModal({ title, message, onConfirm }: ErrorModalProps) {
  return (
    <>
      <div className={style.backdrop} onClick={onConfirm}></div>
      <Card className={style.modal}>
        <header className={style.header}>
          <h2>{title}</h2>
        </header>
        <div className={style.content}>
          <p>{message}</p>
        </div>
        <footer className={style.actions}>
          <Button onClick={onConfirm}>Okay</Button>
        </footer>
      </Card>
    </>
  );
}

export default ErrorModal;

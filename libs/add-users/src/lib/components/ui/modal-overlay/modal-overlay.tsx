import { IModal } from '../../../models/IModal';
import Button from '../button/button/button';
import Card from '../card/card';
import style from './modal-overlay.module.scss';

/* eslint-disable-next-line */
export interface ModalOverlayProps extends IModal {
  onConfirm?: (
    event: React.FormEvent<EventTarget> | React.ChangeEvent<HTMLInputElement>
  ) => void;
}

export function ModalOverlay({ title, message, onConfirm }: ModalOverlayProps) {
  return (
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
  );
}

export default ModalOverlay;

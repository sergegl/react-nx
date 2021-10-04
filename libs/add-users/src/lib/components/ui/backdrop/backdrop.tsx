import { IModal } from '../../../models/IModal';
import style from './backdrop.module.scss';

/* eslint-disable-next-line */
export interface BackdropProps extends IModal {
  onConfirm?: (
    event: React.FormEvent<EventTarget> | React.ChangeEvent<HTMLInputElement>
  ) => void;
}

export function Backdrop({ onConfirm }: BackdropProps) {
  return <div className={style.backdrop} onClick={onConfirm}></div>;
}

export default Backdrop;

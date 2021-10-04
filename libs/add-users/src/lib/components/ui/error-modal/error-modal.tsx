import ReactDOM from 'react-dom';
import { IModal } from '../../../models/IModal';
import Backdrop from '../backdrop/backdrop';
import ModalOverlay from '../modal-overlay/modal-overlay';

/* eslint-disable-next-line */
export interface ErrorModalProps extends IModal {
  onConfirm?: (
    event: React.FormEvent<EventTarget> | React.ChangeEvent<HTMLInputElement>
  ) => void;
}

export function ErrorModal({ title, message, onConfirm }: ErrorModalProps) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={onConfirm} />,
        document.getElementById('overlay-root') as HTMLElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay title={title} message={message} onConfirm={onConfirm} />,
        document.getElementById('modal-root') as HTMLElement
      )}
    </>
  );
}

export default ErrorModal;

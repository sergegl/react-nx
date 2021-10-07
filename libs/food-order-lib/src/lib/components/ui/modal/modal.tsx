import Backdrop from '../backdrop/backdrop';
import ModalOverlay from '../modal-overlay/modal-overlay';
import ReactDOM from 'react-dom';

/* eslint-disable-next-line */
export interface ModalProps {
  children?: React.ReactNode;
  onClose?: () => void;
}

export function Modal({ children, onClose }: ModalProps) {
  const portalElement = document.getElementById('overlays') as HTMLElement;
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
}

export default Modal;

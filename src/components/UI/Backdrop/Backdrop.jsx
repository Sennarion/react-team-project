import { createPortal } from 'react-dom';
import { BackdropWrapper } from './Backdrop.styled';

export default function Backdrop({ children, ...props }) {
  return createPortal(
    <BackdropWrapper {...props}>{children}</BackdropWrapper>,
    document.querySelector('#popup-root')
  );
}

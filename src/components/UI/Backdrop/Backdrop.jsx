import { BackdropWrapper } from './Backdrop.styled';

export default function Backdrop({ children, ...props }) {
  return <BackdropWrapper {...props}>{children}</BackdropWrapper>;
}

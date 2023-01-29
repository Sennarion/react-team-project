import { But } from './Button.styled';

export default function Button({ children, ...props }) {
  return <But {...props}>{children}</But>;
}

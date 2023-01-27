import { Nav, NavItem } from './MobileNavigation.styled';

export default function MobileNavigation() {
  return (
    <Nav>
      <NavItem to="/" />
      <NavItem to="/diagram" />
      <NavItem to="/currency" />
    </Nav>
  );
}

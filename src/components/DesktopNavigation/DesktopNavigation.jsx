import { Nav, NavItem, Icon, Text } from './DesktopNavigation.styled';
import icons from '../../images/icons.svg';

export default function DesktopNavigation() {
  return (
    <Nav>
      <NavItem to="/">
        <Icon>
          <svg width="18" height="18">
            <use href={`${icons}#icon-home`}></use>
          </svg>
        </Icon>
        <Text>Home</Text>
      </NavItem>
      <NavItem to="/diagram">
        <Icon>
          <svg width="18" height="18">
            <use href={`${icons}#icon-stat`}></use>
          </svg>
        </Icon>
        <Text>Statistics</Text>
      </NavItem>
    </Nav>
  );
}

import { Nav, NavItem, Icon } from './MobileNavigation.styled';
import icons from '../../images/icons.svg';

export default function MobileNavigation() {
  return (
    <Nav>
      <NavItem to="/">
        <Icon>
          <svg width="38" height="38">
            <use href={`${icons}#icon-home`}></use>
          </svg>
        </Icon>
      </NavItem>
      <NavItem to="/diagram">
        <Icon>
          <svg width="38" height="38">
            <use href={`${icons}#icon-stat`}></use>
          </svg>
        </Icon>
      </NavItem>
      <NavItem to="/currency">
        <Icon>
          <svg width="38" height="38">
            <use href={`${icons}#icon-currency`}></use>
          </svg>
        </Icon>
      </NavItem>
    </Nav>
  );
}

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(9)};
`;

export const NavItem = styled(NavLink)`
  width: 38px;
  height: 38px;
  background-color: ${({ theme }) => theme.colors.accentBlue};
  border-radius: 6px;

  &.active {
    background-color: ${({ theme }) => theme.colors.accentGreen};
  }
`;

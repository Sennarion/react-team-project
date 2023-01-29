import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(9)};
`;

export const NavItem = styled(NavLink)`
  display: block;
  border-radius: 6px;
  overflow: hidden;

  &.active {
    filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));

    svg {
      fill: ${({ theme }) => theme.colors.accentBlue};
    }
  }
`;

export const Icon = styled.div`
  width: 38px;
  height: 38px;

  background-color: ${({ theme }) => theme.colors.white};

  svg {
    fill: ${({ theme }) => theme.colors.secondaryBlue};
  }
`;

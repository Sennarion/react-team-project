import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
  font-family: ${({ theme }) => theme.fonts.secondary};
  margin-bottom: ${({ theme }) => theme.spacing(7)};
`;

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(6)};

  &.active {
    div {
      filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
    }

    span {
      font-family: ${({ theme }) => theme.fonts.secondaryBold};
    }

    svg {
      fill: ${({ theme }) => theme.colors.accentBlue};
    }
  }
`;

export const Icon = styled.div`
  width: 18px;
  height: 18px;

  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.white};

  svg {
    fill: ${({ theme }) => theme.colors.secondaryBlue};
  }
`;

export const Text = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.black}; ;
`;

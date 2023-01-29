import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  padding-top: ${({ theme }) => theme.spacing(4)};
  padding-bottom: ${({ theme }) => theme.spacing(4)};

  background-color: ${({ theme }) => theme.colors.white};

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    padding-top: ${({ theme }) => theme.spacing(5)};
    padding-bottom: ${({ theme }) => theme.spacing(5)};
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    gap: ${({ theme }) => theme.spacing(5)};
  }
`;

export const Logo = styled.svg`
  width: 30px;
  height: 30px;

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    width: 40px;
    height: 40px;
  }
`;

export const LogoText = styled.span`
  font-family: ${({ theme }) => theme.fonts.secondaryBold};
  font-size: ${({ theme }) => theme.fontSizes.max};
  color: ${({ theme }) => theme.colors.black};

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.title};
  }
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};

  font-size: ${({ theme }) => theme.fontSizes.medium};

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    gap: ${({ theme }) => theme.spacing(6)};
  }
`;

export const UserName = styled.span`
  position: relative;
  color: ${({ theme }) => theme.colors.secondaryTextColor};

  &::first-letter {
    text-transform: capitalize;
  }

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    &::after {
      content: '';
      position: absolute;
      width: 1px;
      height: 30px;
      top: 50%;
      transform: translateY(-50%);
      right: -${({ theme }) => theme.spacing(3)};
      background-color: ${({ theme }) => theme.colors.secondaryTextColor};
    }
  }
`;

export const LogoutBtn = styled.button`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing(2)};
  color: ${({ theme }) => theme.colors.secondaryTextColor};

  border: none;
  background-color: transparent;
`;

export const LogoutIcon = styled.svg`
  fill: ${({ theme }) => theme.colors.secondaryTextColor};
`;

export const LogoutText = styled.span`
  display: none;
  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    display: inline;
  }
`;

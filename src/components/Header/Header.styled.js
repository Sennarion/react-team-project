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

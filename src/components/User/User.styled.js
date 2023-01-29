import styled from 'styled-components';

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
  cursor: pointer;

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

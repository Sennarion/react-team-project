import styled from 'styled-components';

export const ButtonAddTransactionStyled = styled.button`
  width: ${({ theme }) => theme.spacing(11)};
  height: ${({ theme }) => theme.spacing(11)};
  border-radius: 50%;

  position: sticky;

  bottom: ${({ theme }) => theme.spacing(10)};
  right: ${({ theme }) => theme.spacing(10)};

  @media screen and (max-width: ${({ theme }) => theme.media.mobile}) {
    bottom: ${({ theme }) => theme.spacing(5)};
    right: ${({ theme }) => theme.spacing(5)};
  }

  color: ${({ theme }) => theme.colors.accentGreen};
  :hover {
    color: ${({ theme }) => theme.colors.accentBlue};
  }
`;

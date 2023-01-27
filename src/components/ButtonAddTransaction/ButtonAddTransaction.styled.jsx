import styled from 'styled-components';

export const ButtonAddTransactionStyled = styled.button`
  position: fixed;
  bottom: ${({ theme }) => theme.spacing(5)};
  right: ${({ theme }) => theme.spacing(5)};

  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ theme }) => theme.spacing(11)};
  height: ${({ theme }) => theme.spacing(11)};
  border: none;
  border-radius: 50%;
  box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);
  cursor: pointer;

  background-color: ${({ theme }) => theme.colors.accentGreen};

  svg {
    fill: ${({ theme }) => theme.colors.white};
  }

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    bottom: ${({ theme }) => theme.spacing(10)};
    right: ${({ theme }) => theme.spacing(10)};
  }
`;

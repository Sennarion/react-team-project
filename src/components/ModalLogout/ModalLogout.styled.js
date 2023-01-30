import styled from 'styled-components';

export const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)};
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing(4)};

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    padding: ${({ theme }) => theme.spacing(10)};
    border-radius: 20px;
    width: auto;
    height: auto;
  }
`;

export const ModalTitle = styled.h2`
  text-align: center;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
`;

export const But = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: ${({ theme }) => theme.spacing(70)};
  height: ${({ theme }) => theme.spacing(12)};
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.accentBlue};
  color: ${({ theme }) => theme.colors.accentBlue};
  border-radius: ${({ theme }) => theme.spacing(5)};
  cursor: pointer;
  transition: box-shadow ${({ theme }) => theme.animation.cubicBezier};
  font-size: ${({ theme }) => theme.spacing(4.5)};
  line-height: ${({ theme }) => theme.spacing(7)};
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  &:hover,
  &:focus {
    box-shadow: 0 0.5em 0.5em -0.4em ${({ theme }) => theme.colors.accentBlue};
  }
`;

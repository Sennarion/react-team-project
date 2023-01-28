import styled from 'styled-components';

export const But = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.accentGreen};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.spacing(4.5)};
  line-height: ${({ theme }) => theme.spacing(7)};
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: box-shadow ${({ theme }) => theme.animation.cubicBezier};
  &:hover,
  &:focus {
    box-shadow: 0 0.5em 0.5em -0.4em ${({ theme }) => theme.colors.accentBlue};
  }
`;

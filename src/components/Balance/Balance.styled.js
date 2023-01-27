import styled from 'styled-components';

export const BalanceWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(8)};
  border-radius: 30px;
`;

export const Desc = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.min};
  line-height: calc(18 / 12);
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.secondaryTextColor};
  margin-bottom: ${({ theme }) => theme.spacing(3)};
`;

export const BalanceStatus = styled.h2`
  font-family: ${({ theme }) => theme.fonts.secondaryBold};
  font-size: ${({ theme }) => theme.fontSizes.title};
  line-height: calc(45 / 30);
`;

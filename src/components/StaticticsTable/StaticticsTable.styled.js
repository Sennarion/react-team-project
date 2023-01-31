import styled from 'styled-components';

export const TableHead = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  padding: ${({ theme }) => theme.spacing(4)} ${({ theme }) => theme.spacing(5)};
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.medhium};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: calc(27 / 18);
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
`;
export const TableBody = styled.ul`
  display: flex;
  padding-left: ${({ theme }) => theme.spacing(5)};
  padding-right: ${({ theme }) => theme.spacing(5)};
  flex-direction: column;
  gap: 28px;
  margin-bottom: 30px;
`;

export const Row = styled.li`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Line = styled.div`
  position: absolute;
  top: 38px;
  left: 50%;
  transform: translateX(-50%);
  width: 280px;
  color: #dcdcdf;
  border: 1px solid #dcdcdf;
  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
`;
export const Square = styled.span`
  margin-right: ${({ theme }) => theme.spacing(4)};
  display: inline-block;
  width: 24px;
  height: 24px;
  border-radius: 2px;
`;

export const Category = styled.p`
  margin-right: auto;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  line-height: calc(18 / 16);
  /* @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    padding-top: ${({ theme }) => theme.spacing(6)};
  } */
`;
export const Sum = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  line-height: calc(24 / 16);
  /* @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    padding-top: ${({ theme }) => theme.spacing(6)};
  } */
`;
export const Total = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: calc(24 / 16);
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
  padding-bottom: ${({ theme }) => theme.spacing(12)};
`;
export const TotalWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: ${({ theme }) => theme.spacing(5)};
  padding-right: ${({ theme }) => theme.spacing(5)};
`;

export const ExpenseSum = styled.div`
  color: ${({ theme }) => theme.colors.accentPink};
`;
export const IncomeSum = styled.div`
  color: ${({ theme }) => theme.colors.accentGreen};
`;

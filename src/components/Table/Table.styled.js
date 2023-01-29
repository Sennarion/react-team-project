import styled from 'styled-components';
import { Table } from 'antd';
import { theme } from '../../styles/theme';
// // import { breakpoints } from 'styleConfig/breakpoints';

export const StyledTable = styled(Table)`
  max-width: 750px;
  .ant-table {
    max-width: 800px;
    border-radius: 15px;
    background: transparent;
    /* transparent; */
  }

  .ant-table-thead tr th {
    font-family: ${theme.fonts.primary};
    font-weight:  ${theme.fontWeight.bold};
    font-size: ${theme.fontSizes.medium};
    background: ${theme.colors.white};
  }

  .ant-table-cell {
    font-size: $24px;
    background-color: transparent;
  }

  th.ant-table-cell::before{
    background-color:transparent !important;
  }

  .ant-table-container,
  .ant-table-container table > thead > tr:first-child th:first-child {
    border-radius: 30px 0 0 30px;
  }
  
  .ant-table-container,
  .ant-table-container table > thead > tr:first-child th:last-child {
    border-radius: 0 30px 30px 0;
  }

  .rowStyled > td {
    text-align: center;
  }
`;

export const List = styled.ul`
  width: 100%;
  min-width: 240px;
  margin-bottom: 10px;
  border-radius: 10px;
  border-left: 5px solid;
  border-left-color: ${({ type }) => (type === 'INCOME' ? 'green' : 'red')};
  background: ${theme.colors.white};
  overflow: hidden;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: ${theme.fonts.primary};
  font-weight: ${theme.fontWeight.normal};
  font-size: ${theme.fontSizes.small};
  padding: 8px 20px;
  :not(:last-child) {
    border-bottom: 1px solid #dcdcdf;
  }
`;

export const ListText = styled.span`
font-family: ${theme.fonts.primary};
font-weight: ${theme.fontWeight.bold};
font-size: ${theme.fontSizes.medium};
`;

export const SumStyled = styled.span`
color: ${({ type }) => (type === 'INCOME' ? 'green' : 'red')};
font-family: ${theme.fonts.primary};
font-weight: ${theme.fontWeight.bold};
font-size: ${theme.fontSizes.small};
`;

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100%;
`;


//   @media screen and (${breakpoints.tablet}) {
//     padding-right: 0;
//     min-width: 0;
//   }
//   @media screen and (${breakpoints.laptop}) {
//     padding: 46px 0 0 0px;
//     width: 100%;
//   }
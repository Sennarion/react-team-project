import styled from 'styled-components';
import { Table } from 'antd';
import { theme } from '../../styles/theme';

export const StyledTable = styled(Table)`
  min-width: 715px;
  max-width: 750px;

  @media screen and (min-width: ${theme.media.tablet}) {
    min-width: 704px;
  }

  .ant-table {
    width: 100%;
    border-radius: 30px;
    background: transparent;
  }
  .ant-table .ant-table-container {
    border-radius: 0;
  }
  .ant-table table {
    border-radius: 30px;
  }
  thead.ant-table-thead tr th {
    font-family: ${date => date.theme.fonts.primary};
    font-weight: ${date => date.theme.fontWeight.bold};
    font-size: ${date => date.theme.fontSizes.medium};
    background: ${date => date.theme.colors.white};
  }

  .ant-table-tbody tr td {
    border-top: 1px solid #dcdcdf !important;
  }

  .ant-table-cell {
    font-family: ${date => date.theme.fonts.primary};
    font-weight: ${date => date.theme.fontWeight.normal};
    font-size: ${date => date.theme.fontSizes.small};
    text-align: center;
  }

  .ant-table-container table > thead > tr > th {
    text-align: center;
  }

  th.ant-table-cell::before {
    background-color: transparent !important;
  }

  .ant-table-container,
  .ant-table-container table > thead > tr:first-child th:first-child {
    border-radius: 30px 0 0 30px;
  }
  .ant-table-container,
  .ant-table-container table > thead > tr:first-child th:last-child {
    border-radius: 0 30px 30px 0;
  }

  //body of table
  .ant-table-container,
  .ant-table-container table > tbody > tr:first-child td:first-child {
    border-radius: 30px 0px 0px 0px !important;
  }
  .ant-table-container,
  .ant-table-container table > tbody > tr:first-child td:last-child {
    border-radius: 0px 30px 0px 0px !important;
  }

  .ant-table-container,
  .ant-table-container table > tbody > tr:last-child td {
    border-bottom: none !important;
  }

  .ant-table-container,
  .ant-table-container table > tbody > tr td {
    border-bottom: none !important;
  }
`;

export const List = styled.ul`
  width: 100%;
  min-width: 240px;
  margin-bottom: 10px;
  border-radius: 10px;
  border-left: 5px solid;
  border-left-color: ${({ type, theme }) =>
    type === 'INCOME' ? theme.colors.accentGreen : theme.colors.accentPink};
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
  color: ${({ type, theme }) =>
    type === 'INCOME' ? theme.colors.accentGreen : theme.colors.accentPink};
  font-family: ${theme.fonts.primary};
  font-weight: ${theme.fontWeight.bold};
  font-size: ${theme.fontSizes.small};
`;

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100%;

  @media screen and (${theme.media.tablet}) {
    padding-right: 0;
    min-width: 0;
  }
  @media screen and (${theme.media.laptop}) {
    padding: 46px 0 0 0px;
    width: 100%;
  }
`;

//   @media screen and (${breakpoints.tablet}) {
//     padding-right: 0;
//     min-width: 0;
//   }
//   @media screen and (${breakpoints.laptop}) {
//     padding: 46px 0 0 0px;
//     width: 100%;
//   }

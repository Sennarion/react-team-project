import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
`;

export const TableHead = styled.thead`
  font-family: ${({ theme }) => theme.fonts.primaryBold};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  line-height: calc(27 / 18);
  background-color: ${({ theme }) => theme.colors.secondaryBlue};
`;

export const TableHeadData = styled.td`
  width: 50%;
  padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(4)};
`;

export const TableBodyData = styled.td`
  width: 50%;
  padding-top: ${({ theme }) => theme.spacing(4)};
  padding-left: ${({ theme }) => theme.spacing(4)};
  padding-right: ${({ theme }) => theme.spacing(4)};

  /* @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    padding-top: ${({ theme }) => theme.spacing(6)};
  } */
`;

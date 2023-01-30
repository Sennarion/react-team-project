import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
`;

export const TableHead = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.medhium};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: calc(27 / 18);
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 30px;
  min-width: 280px;
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

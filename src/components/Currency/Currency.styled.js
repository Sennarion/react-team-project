import styled from 'styled-components';
import bg from '../../images/wave-bg.svg';

export const TableWrapper = styled.div`
  background: url(${bg}) bottom / 100% no-repeat;
  background-color: ${({ theme }) => theme.colors.accentBlue};
  border-radius: 30px;
  overflow: hidden;

  min-height: 174px;

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    width: 50%;
    min-height: 182px;
  }

  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    width: 100%;
    min-height: 331px;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;

export const TableHead = styled.thead`
  font-family: ${({ theme }) => theme.fonts.primaryBold};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  line-height: calc(27 / 18);
  background-color: ${({ theme }) => theme.colors.secondaryBlue};
`;

export const TableHeadData = styled.td`
  width: 33%;
  padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(4)};
`;

export const TableBodyData = styled.td`
  width: 33%;
  padding-top: ${({ theme }) => theme.spacing(4)};
  padding-left: ${({ theme }) => theme.spacing(4)};
  padding-right: ${({ theme }) => theme.spacing(4)};

  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    padding-top: ${({ theme }) => theme.spacing(6)};
  }
`;

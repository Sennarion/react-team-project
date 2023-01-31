import styled from 'styled-components';
import bg from '../../images/wave-bg.svg';

export const TableWrapper = styled.div`
  position: relative;
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

export const LoaderWrapper = styled.div`
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
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

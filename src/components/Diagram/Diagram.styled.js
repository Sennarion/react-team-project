import styled from 'styled-components';

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  text-align: start;
  line-height: calc(45 / 30);
  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    position: absolute;
    top: 0;
  }
  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    position: relative;
    margin-top: 32px;
  }
`;
export const DiagramWrapper = styled.div`
  flex-grow: 1;
  /* margin-top: 40px; */
  position: relative;
  /* @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    display: flex;
    justify-content: space-between;
  } */
`;

export const ChartTable = styled.div`
  flex-grow: 1;
  position: relative;
  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    gap: 32px;
  }
`;

export const Dropdowns = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    gap: 0;
    flex-direction: row;
    justify-content: space-between;
  }
  /* @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
  } */
`;

export const DropdownWrap = styled.li`
  /* margin-bottom: 20px;
  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    margin-bottom: 0;
  } */
`;

export const Wrap = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    width: 336px;
  }
  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    width: 395px;
  }
`;

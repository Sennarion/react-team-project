import styled from 'styled-components';

export const Title = styled.h2`
  position: absolute;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  text-align: start;
  /* @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    margin-top: 32px;
  } */
`;
export const DiagramWrapper = styled.div`
  flex-grow: 1;
  position: relative;
  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    display: flex;
    justify-content: space-between;
  }
`;
export const Dropdowns = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
  }
`;

export const DropdownWrap = styled.li`
  margin-bottom: 20px;
`;

export const Wrap = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    width: 336px;
  }
`;

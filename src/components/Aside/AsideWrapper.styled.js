import styled from 'styled-components';

export const AsideWrapper = styled.aside`
  display: flex;
  align-items: flex-end;
  width: 100%;
  gap: ${({ theme }) => theme.spacing(8)};

  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    flex-direction: column;
    max-width: 400px;
  }
`;

export const LeftSide = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    width: 50%;
  }

  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    width: 100%;
  }
`;

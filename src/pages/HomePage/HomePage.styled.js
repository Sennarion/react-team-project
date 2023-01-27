import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    flex-direction: row;
  }
`;

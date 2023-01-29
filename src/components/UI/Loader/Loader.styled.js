import styled from 'styled-components';

export const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.white};
`;

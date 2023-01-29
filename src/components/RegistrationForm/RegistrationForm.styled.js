import styled from 'styled-components';

export const ProgressBarContainer = styled.div`
  height: ${({ theme }) => theme.spacing(2)};
  margin-top: ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.spacing(1)};
  border: 1px solid #e5f1ef;
  background-color: #e5f1ef;
`;
export const ProgressBar = styled.div`
  height: 100%;
  max-width: 100%;
  border-radius: ${({ theme }) => theme.spacing(1)};
`;

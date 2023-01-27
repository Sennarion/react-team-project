import styled from 'styled-components';
export const LogoWrapper = styled.div`
margin-top: ${({ theme }) => theme.spacing(27)};
margin-bottom: ${({ theme }) => theme.spacing(15)};
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(4)};
`;
export const LogoText = styled.span`
  font-family: ${({ theme }) => theme.fonts.secondaryBold};
  font-size: ${({ theme }) => theme.spacing(5)};
`;

import styled from 'styled-components';

export const LogoWrapper = styled.div`
  margin-top: ${({ theme }) => theme.spacing(27)};
  margin-bottom: ${({ theme }) => theme.spacing(15)};
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(4)};
  svg {
    width: 30px;
    height: 30px;
    @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
      width: 40px;
      height: 40px;
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    margin-top: 0;
    margin-bottom: ${({ theme }) => theme.spacing(15)};
  }
`;

export const LogoText = styled.span`
  font-family: ${({ theme }) => theme.fonts.secondaryBold};
  font-size: ${({ theme }) => theme.spacing(5)};
  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    font-size: ${({ theme }) => theme.spacing(8)};
  }
`;

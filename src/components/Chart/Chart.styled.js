import styled from 'styled-components';

export const DoughnutWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
  min-width: 280px;
  min-height: 280px;
  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    width: 336px;
    height: 336px;
    margin-top: ${({ theme }) => theme.spacing(16)};
    margin-bottom: 0;
  }
  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    width: 288px;
    height: 288px;
    margin-top: 0;
  }
`;
export const Balance = styled.p`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: calc(27 / 18);
  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    width: 288px;
  }
  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    width: 288px;
  }
`;

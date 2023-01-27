import styled from 'styled-components';
import topEllipse from '../../images/top-ellipse.svg';
import bottomEllipse from '../../images/bottom-ellipse.svg';

export const PageWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  min-height: 100vh;
  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    background: url(${topEllipse}) top right no-repeat,
      url(${bottomEllipse}) bottom left no-repeat;
    background-color: ${({ theme }) => theme.colors.bgColor};
  }
`;
export const LeftSide = styled.div`
  display: flex;
  padding-left: ${({ theme }) => theme.spacing(21)};

  gap: ${({ theme }) => theme.spacing(10)};
  align-items: center;
  justify-content: flex-start;
  padding-top: ${({ theme }) => theme.spacing(15)};
  padding-bottom: ${({ theme }) => theme.spacing(13)};
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const RightSide = styled.div`
  margin: 0 auto;
  max-width: 533px;
  padding-top: ${({ theme }) => theme.spacing(10)};
  padding-bottom: ${({ theme }) => theme.spacing(15)};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.spacing(5)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const MainTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.secondaryRegular};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: ${({ theme }) => theme.spacing(7)};
  line-height: ${({ theme }) => theme.spacing(11)};
`;
export const ImgBox = styled.div`
  width: ${({ theme }) => theme.spacing(65)};
  height: ${({ theme }) => theme.spacing(62)};
`;

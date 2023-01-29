import styled from 'styled-components';
import topEllipse from '../../images/top-ellipse.svg';
import bottomEllipse from '../../images/bottom-ellipse.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;
  overflow: auto;
  &::before {
    content: '';
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.colors.bgColor};
  }

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    &::before {
      background: url(${topEllipse}) top right no-repeat,
        url(${bottomEllipse}) bottom left no-repeat;
      background-color: ${({ theme }) => theme.colors.bgColor};
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    flex-direction: column;
    width: 45%;
    padding-left: ${({ theme }) => theme.spacing(19)};
  }
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  z-index: 1;

  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 65%;
    min-height: 100vh;
    position: relative;
    z-index: 1;
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(25px);
  }
`;

export const MainTitle = styled.h1`
  display: none;
  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    display: block;
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    font-size: ${({ theme }) => theme.spacing(8)};
    line-height: ${({ theme }) => theme.spacing(11)};
  }
`;

export const ImgBox = styled.div`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    display: block;
    margin-right: ${({ theme }) => theme.spacing(10)};
    margin-top: ${({ theme }) => theme.spacing(15)};
    width: ${({ theme }) => theme.spacing(65)};
    height: ${({ theme }) => theme.spacing(62)};
  }
  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    width: ${({ theme }) => theme.spacing(109)};
    height: ${({ theme }) => theme.spacing(105)};
    margin-right: 0;
    margin-bottom: ${({ theme }) => theme.spacing(7)};
  }
`;

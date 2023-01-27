import styled from 'styled-components';
import topEllipse from '../../images/top-ellipse.svg';
import bottomEllipse from '../../images/bottom-ellipse.svg';

export const BgWrapper = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 200px;

  background-color: ${({ theme }) => theme.colors.bgColor};

  /* backdrop-filter: blur(25px); */

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    background: url(${topEllipse}) top right no-repeat,
      url(${bottomEllipse}) bottom left no-repeat;
    background-color: ${({ theme }) => theme.colors.bgColor};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(4)} 0;
  gap: ${({ theme }) => theme.spacing(7)};

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    padding: ${({ theme }) => theme.spacing(8)} 0;
    gap: ${({ theme }) => theme.spacing(5)};
  }

  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    flex-direction: row;
    padding: ${({ theme }) => theme.spacing(12)} 0;
    gap: ${({ theme }) => theme.spacing(10)};
  }
`;

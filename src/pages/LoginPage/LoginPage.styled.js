import styled from 'styled-components';

export const LeftSide = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(10)};
  align-items: center;
  justify-content: center;
  padding-top: ${({ theme }) => theme.spacing(15)};
  @media screen and (max-width: 767px){
    display:none;
  }
`;
export const MainTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.secondaryRegular};
  font-size: ${({ theme }) => theme.spacing(7)};
  line-height: ${({ theme }) => theme.spacing(11)};
`;
export const ImgBox = styled.div`
width: ${({ theme }) => theme.spacing(65)};
height: ${({ theme }) => theme.spacing(62)};
`
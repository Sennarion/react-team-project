import styled from 'styled-components';
import arrow from '../../images/arrow.svg';

export const SelectWrapper = styled.div`
  position: relative;
`;

export const ButtonSelect = styled.div`
  cursor: pointer;
  border-radius: ${({ theme }) => theme.spacing(7.5)};
  width: ${({ theme }) => theme.spacing(70)};
  padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(5)}
    ${({ theme }) => theme.spacing(3.5)} ${({ theme }) => theme.spacing(5)};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  background-color: transparent;
  line-height: ${({ theme }) => theme.spacing(6)};
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.black};
  &::after {
    content: '';
    position: absolute;
    display: block;
    top: ${({ theme }) => theme.spacing(5)};
    right: ${({ theme }) => theme.spacing(5)};
    background-image: url(${arrow});
    height: ${({ theme }) => theme.spacing(3)};
    width: ${({ theme }) => theme.spacing(5)};
    pointer-events: none;
    transition: transform ${({ theme }) => theme.animation.cubicBezier};
    transform: rotate(${({ isOpen }) => (isOpen ? '180deg' : '0')});
  }
  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    width: ${({ theme }) => theme.spacing(40)};
  }
`;
export const SelectList = styled.ul`
  position: absolute;
  top: ${({ theme }) => theme.spacing(13)}
  left: 0;
  z-index: 1;
  width: 100%;
  height: ${({ theme }) => theme.spacing(40)};
  overflow: auto;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(25px);
  border-radius: ${({ theme }) => theme.spacing(5)};

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
      width: 0;
      height: 0;
  }
`;

export const SelectItem = styled.li`
  cursor: pointer;
  padding-top: ${({ theme }) => theme.spacing(2)};
  padding-bottom: ${({ theme }) => theme.spacing(2)};
  padding-left: ${({ theme }) => theme.spacing(5)};
  padding-right: ${({ theme }) => theme.spacing(5)};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.small};
  line-height: ${({ theme }) => theme.spacing(6)};
  width: 100%;
  color: ${({ theme }) => theme.colors.black};
  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.white};
  }
`;

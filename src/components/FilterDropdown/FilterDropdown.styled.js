import styled from 'styled-components';
import arrow from '../../images/arrow.svg';

export const SelectWrapper = styled.div`
  position: relative;
`;

export const ButtonSelect = styled.div`
  cursor: pointer;
  border-radius: 30px;
  width: 280px;
  padding: 12px 20px 14px 20px;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  background-color: transparent;
  line-height: calc(24 / 16);
  position: relative;
  border: 1px solid #000000;
  &::after {
    content: '';
    position: absolute;
    display: block;
    top: 20px;
    right: 20px;
    background-image: url(${arrow});
    height: 11px;
    width: 20px;
    pointer-events: none;
    transition-property: background-image, transform;
    transition-duration: 200ms;
    transition-timing-function: linear;
    transition-delay: 0;
  }
  &:focus::after {
    transform: rotate(180deg);
  }
  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    width: 160px;
  }
`;
export const SelectList = styled.ul`
  position: absolute;
  top: 52px;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 157px;
  overflow: auto;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(25px);
  border-radius: 20px;

  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
      width: 0;
      height: 0;
`;
export const SelectItem = styled.li`
  padding-top: ${({ theme }) => theme.spacing(2)};
  padding-bottom: ${({ theme }) => theme.spacing(2)};
  padding-left: ${({ theme }) => theme.spacing(5)};
  padding-right: ${({ theme }) => theme.spacing(5)};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.small};
  line-height: calc(24 / 16);
  width: 100%;
  color: ${({ theme }) => theme.colors.black};
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.accentPink};
    background: #ffffff;
  }
`;

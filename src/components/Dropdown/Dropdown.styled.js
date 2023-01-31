import styled from 'styled-components';
import arrow from '../../images/arrow.svg';

export const Select = styled.select`
  cursor: pointer;
  border-radius: 20px;
  width: 280px;
  padding: 12px 20px 14px 20px;
  appearance: none;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.small};
  background-color: ${({ theme }) => theme.colors.bgColor};
`;
export const Option = styled.option`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.black};
`;
export const SelectWrap = styled.div`
  position: relative;
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
  }
`;

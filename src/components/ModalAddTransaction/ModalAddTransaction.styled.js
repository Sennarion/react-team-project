import styled from 'styled-components';
import { Form, Field } from 'formik';
import plusIcon from '../../images/plus.svg';
import minusIcon from '../../images/minus.svg';
import DatePicker from 'react-datepicker';

export const Modal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(10)};
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing(4)};
  overflow: auto;

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    width: auto;
    height: auto;
    border-radius: ${({ theme }) => theme.spacing(5)};

    padding: ${({ theme }) => theme.spacing(10)}
      ${({ theme }) => theme.spacing(18)};
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing(5)};
  right: ${({ theme }) => theme.spacing(5)};
  background-color: transparent;
  border: none;
  padding: ${({ theme }) => theme.spacing(2)};
  cursor: pointer;

  &:hover,
  &:focus {
    svg {
      fill: ${({ theme }) => theme.colors.accentGreen};
      transition: fill ${({ theme }) => theme.animation.cubicBezier};
    }
  }
`;

export const ModalTitle = styled.h2`
  text-align: center;
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.title};
  line-height: 1.5;
`;

export const ToggleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ToggleText = styled.span`
  font-family: ${({ theme }) => theme.fonts.primaryBold};
  color: #e0e0e0;
  transition: color ${({ theme }) => theme.animation.cubicBezier};

  &[data-active='true'] {
    &:nth-of-type(1) {
      color: ${({ theme }) => theme.colors.accentGreen};
    }
    &:nth-of-type(2) {
      color: ${({ theme }) => theme.colors.accentPink};
    }
  }
`;

export const Toggle = styled.div`
  position: relative;
  width: ${({ theme }) => theme.spacing(20)};
  height: ${({ theme }) => theme.spacing(10)};
  border-radius: ${({ theme }) => theme.spacing(5)};
  border: 1px solid #e0e0e0;
  margin-left: ${({ theme }) => theme.spacing(6)};
  margin-right: ${({ theme }) => theme.spacing(6)};
`;

export const ToggleLabel = styled.label`
  display: block;
  width: 100%;
  height: 100%;
  cursor: pointer;

  &::after {
    position: absolute;
    content: '';
    display: block;
    top: 50%;
    transform: translate(-100%, -50%);
    left: 50%;
    background-color: ${({ theme }) => theme.colors.accentGreen};
    background-image: url(${plusIcon});
    background-position: center;
    background-repeat: no-repeat;
    box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);
    height: ${({ theme }) => theme.spacing(11)};
    width: ${({ theme }) => theme.spacing(11)};
    border-radius: 50%;
    transition: transform ${({ theme }) => theme.animation.cubicBezier},
      background-color ${({ theme }) => theme.animation.cubicBezier},
      box-shadow ${({ theme }) => theme.animation.cubicBezier},
      background-image ${({ theme }) => theme.animation.cubicBezier};
  }

  &[value='true'] {
    &::after {
      box-shadow: 0px 6px 15px rgba(255, 101, 150, 0.5);
      background-color: ${({ theme }) => theme.colors.accentPink};
      background-image: url(${minusIcon});
      transform: translate(0, -50%);
    }
  }
`;

export const ToggleInput = styled.input`
  display: none;
`;

export const TransactionForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(10)};
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const SumInput = styled(Field)`
  width: 100%;
  height: ${({ theme }) => theme.spacing(8)};
  border: none;
  outline: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  font-family: ${({ theme }) => theme.fonts.primaryBold};
  forn-size: ${({ theme }) => theme.spacing(5)};
  color: ${({ theme }) => theme.colors.grey};
  text-align: center;
  &::placeholder {
    text-align: center;
    color: ${({ theme }) => theme.colors.grey};
  }
  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    width: ${({ theme }) => theme.spacing(47.5)};
  } ;
`;

export const DateWrapper = styled.div`
  position: relative;
  svg {
    position: absolute;
    top: 0;
    right: 0;
    fill: ${({ theme }) => theme.colors.accentBlue};
    pointer-events: none;
  }
`;

export const DateInput = styled(DatePicker)`
  width: 100%;
  height: ${({ theme }) => theme.spacing(8)};
  padding-left: ${({ theme }) => theme.spacing(4)};
  color: ${({ theme }) => theme.colors.black};
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  outline: none;
  background-color: transparent;
  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    width: ${({ theme }) => theme.spacing(47.5)};
  } ;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(7.5)};
  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    flex-direction: row;
  } ;
`;

export const CommentInput = styled(Field)`
  width: 100%;
  height: ${({ theme }) => theme.spacing(8)};
  border: none;
  outline: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors.grey};
  font-family: 'CirceRegular', sans-serif;
  padding-left: ${({ theme }) => theme.spacing(4)};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  line-height: ${({ theme }) => theme.spacing(7)};
  &::placeholder {
    color: ${({ theme }) => theme.colors.grey};
  }
`;

export const PrimaryBut = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: ${({ theme }) => theme.spacing(75)};
  height: ${({ theme }) => theme.spacing(12.5)};
  background-color: ${({ theme }) => theme.colors.accentGreen};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.spacing(5)};
  border: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.spacing(4.5)};
  line-height: ${({ theme }) => theme.spacing(7)};
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: box-shadow ${({ theme }) => theme.animation.cubicBezier};
  &:hover,
  &:focus {
    box-shadow: 0 0.5em 0.5em -0.4em ${({ theme }) => theme.colors.accentBlue};
  }
  margin-bottom: ${({ theme }) => theme.spacing(5)};
`;

export const But = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: ${({ theme }) => theme.spacing(75)};
  height: ${({ theme }) => theme.spacing(12.5)};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.accentBlue};
  border-radius: ${({ theme }) => theme.spacing(5)};
  border: 1px solid ${({ theme }) => theme.colors.accentBlue};
  cursor: pointer;
  font-size: ${({ theme }) => theme.spacing(4.5)};
  line-height: ${({ theme }) => theme.spacing(7)};
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: box-shadow ${({ theme }) => theme.animation.cubicBezier};
  &:hover,
  &:focus {
    box-shadow: 0 0.5em 0.5em -0.4em ${({ theme }) => theme.colors.accentBlue};
  }
`;

export const ButWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

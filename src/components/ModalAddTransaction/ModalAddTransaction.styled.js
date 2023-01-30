import styled from 'styled-components';
import { Form, Field } from 'formik';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.25);
`;

export const Modal = styled.div`
  width: 540px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  padding-left: ${({ theme }) => theme.spacing(18)};
  padding-right: ${({ theme }) => theme.spacing(18)};
  padding-top: ${({ theme }) => theme.spacing(10)};
  padding-bottom: ${({ theme }) => theme.spacing(10)};
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(10)};
`;

export const CloseButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing(5)};
  right: ${({ theme }) => theme.spacing(5)};
  background-color: transparent;
  border: none;
  svg {
    fill: ${({ theme }) => theme.colors.black};
    &:hover,
    &:focus {
      fill: ${({ theme }) => theme.colors.accentBlue};
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

export const SwitchWrap = styled.div`
  display: flex;
  align-items: center;

  width: ${({ theme }) => theme.spacing(20)};
  height: ${({ theme }) => theme.spacing(10)};
  border-radius: ${({ theme }) => theme.spacing(5)};
  border: 1px solid #e0e0e0;
`;

export const Switch = styled.button`
  width: ${({ theme }) => theme.spacing(11)};
  height: ${({ theme }) => theme.spacing(11)};
  border-radius: 50%;
  border: none;
  background-color: ${({ theme }) => theme.colors.accentGreen};
  position: relative;
  svg {
    position: absolute;
    fill: ${({ theme }) => theme.colors.white};
    top: ${({ theme }) => theme.spacing(3)};
    left: ${({ theme }) => theme.spacing(3)};
  }
`;

// ================ NEW STYLES TOGGLE BUTTON ================
export const ToggleLable = styled.label`
  cursor: pointer;
  position: relative;
  top: -2.4rem;
  left: -3.6rem;
  display: flex;
  padding: 18px;
  background: gray;
  color: transparent;
  border-radius: 50%;
  height: ${({ theme }) => theme.spacing(11)};
  width: ${({ theme }) => theme.spacing(11)};
  transition: background ease 0.3s;
  &::after {
    content: '';
    top: 50%;
    left: 50%;
    transform: translate(-90%, -50%);
    background: white;
    height: ${({ theme }) => theme.spacing(11)};
    width: ${({ theme }) => theme.spacing(11)};
    border-radius: 50%;
    transition: ease 0.3s;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.257);
  }
`;

export const ToggleInput = styled.input`
  display: none;
  &:checked + ToggleLable {
    background: #00ed82;
    transition: background ease 0.3s;
  }
  &:checked + ToggleLable::after {
    transform: translate(-10%, -50%);
    transition: ease 0.3s;
  }
`;

// #switch:checked + .toggle-label {
//   background: var(--primary-color);
//   transition: background ease 0.3s;
// }
// #switch:checked + .toggle-label::after {
//   transform: translate(-10%, -50%);
//   transition: ease 0.3s;
// }

export const TransactionForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(10)};
`;

export const SumInput = styled(Field)`
  width: ${({ theme }) => theme.spacing(47.5)};
  height: ${({ theme }) => theme.spacing(8)};
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
`;

export const DateInput = styled.div`
  width: ${({ theme }) => theme.spacing(47.5)};
  height: ${({ theme }) => theme.spacing(8)};
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  outline: 0;
  background-color: transparent;
`;

export const Wrap = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(7.5)};
`;

export const CommentInput = styled(Field)`
  width: 100%;
  height: ${({ theme }) => theme.spacing(8)};
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
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

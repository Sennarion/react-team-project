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

  svg {
    /* position: absolute;
    top: ${({ theme }) => theme.spacing(5)};
    right: ${({ theme }) => theme.spacing(5)}; */
    fill: ${({ theme }) => theme.colors.black};
  }
`;
export const CloseButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing(5)};
  right: ${({ theme }) => theme.spacing(5)};
  /* fill: ${({ theme }) => theme.colors.black}; */
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
    fill: ${({ theme }) => theme.colors.white};
    top: ${({ theme }) => theme.spacing(3)};
    right: ${({ theme }) => theme.spacing(3)};
  }
`;

export const TransactionForm = styled(Form)``;

export const SumInput = styled(Field)``;

export const DateInput = styled.div``;
export const CommentInput = styled(Field)``;

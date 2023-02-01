import styled from 'styled-components';
import { Field, Form } from 'formik';
import { Link } from 'react-router-dom';

export const FormWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px auto;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  background-color: ${({ theme }) => theme.colors.white};
  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    width: ${({ theme }) => theme.spacing(134)};
    height: auto;
    margin-top: ${({ theme }) => theme.spacing(12)};
    border-radius: ${({ theme }) => theme.spacing(5)};
    padding: ${({ theme }) => theme.spacing(10)}
      ${({ theme }) => theme.spacing(16)};
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: ${({ theme }) => theme.spacing(70)};
  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    width: ${({ theme }) => theme.spacing(102)};
  } ;
`;

export const Wrapper = styled.div`
  position: relative;
  margin-bottom: ${({ theme }) => theme.spacing(10)};
  text-align: center;
  @media screen and (min-width: 768px) {
    margin-bottom: ${({ theme }) => theme.spacing(10)};
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 0;
  left: ${({ theme }) => theme.spacing(5)};
  font-size: ${({ theme }) => theme.spacing(4.5)};
  padding-left: ${({ theme }) => theme.spacing(6)};
  padding-right: ${({ theme }) => theme.spacing(2)};
  color: ${({ theme }) => theme.colors.grey};
  -webkit-transition: top ${({ theme }) => theme.animation.cubicBezier},
    font-size ${({ theme }) => theme.animation.cubicBezier};
  transition: top ${({ theme }) => theme.animation.cubicBezier},
    font-size ${({ theme }) => theme.animation.cubicBezier};
`;

export const Icon = styled.span`
  position: absolute;
  top: ${({ theme }) => theme.spacing(-1)};
  left: ${({ theme }) => theme.spacing(2)};
  margin-right: ${({ theme }) => theme.spacing(5)};
  svg {
    fill: ${({ theme }) => theme.colors.grey};
  }
`;

export const Input = styled(Field)`
  width: ${({ theme }) => theme.spacing(70)};
  height: ${({ theme }) => theme.spacing(8)};
  border: none;
  padding-left: ${({ theme }) => theme.spacing(10)};
  padding-right: ${({ theme }) => theme.spacing(10)};
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.spacing(5)};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.grey};
  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.white};
  }
  &:focus + Label,
  &:not(:placeholder-shown) + Label {
    top: ${({ theme }) => theme.spacing(-5)};
    font-size: ${({ theme }) => theme.spacing(4)};
  }
  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    width: ${({ theme }) => theme.spacing(102)};
  } ;
`;

export const ErrorMess = styled.p`
  position: absolute;
  top: 32px;

  font-size: ${({ theme }) => theme.fontSizes.min};
  padding-top: ${({ theme }) => theme.spacing(1)};
  text-transform: uppercase;
  color: red;
`;

export const LinkTo = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: ${({ theme }) => theme.spacing(70)};
  height: ${({ theme }) => theme.spacing(12)};
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.accentBlue};
  color: ${({ theme }) => theme.colors.accentBlue};
  border-radius: ${({ theme }) => theme.spacing(5)};
  cursor: pointer;
  transition: box-shadow ${({ theme }) => theme.animation.cubicBezier};
  font-size: ${({ theme }) => theme.spacing(4.5)};
  line-height: ${({ theme }) => theme.spacing(7)};
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  &:hover,
  &:focus {
    box-shadow: 0 0.5em 0.5em -0.4em ${({ theme }) => theme.colors.accentBlue};
  }
`;

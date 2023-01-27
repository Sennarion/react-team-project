import React from 'react';
import { ButtonAddTransactionStyled } from './ButtonAddTransaction.styled';
// import PropTypes from 'prop-types';
import { AiOutlinePlus } from 'react-icons/ai';

export const ButtonAddTransaction = () => {
  return (
    <ButtonAddTransactionStyled type="button">
      <AiOutlinePlus width={20} height={20} />
    </ButtonAddTransactionStyled>
  );
};

import React from 'react';
import { ButtonAddTransactionStyled } from './ButtonAddTransaction.styled';
import { AiOutlinePlus } from 'react-icons/ai';

export const ButtonAddTransaction = ({onClick}) => {
  return (
    <ButtonAddTransactionStyled type="button" onClick={onClick}>
      <AiOutlinePlus size={20} />
    </ButtonAddTransactionStyled>
  );
};

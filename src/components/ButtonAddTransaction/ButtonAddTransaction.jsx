import React from 'react';
import { ButtonAddTransactionStyled } from './ButtonAddTransaction.styled';
import { AiOutlinePlus } from 'react-icons/ai';

export const ButtonAddTransaction = () => {
  return (
    <ButtonAddTransactionStyled type="button">
      <AiOutlinePlus size={20} />
    </ButtonAddTransactionStyled>
  );
};

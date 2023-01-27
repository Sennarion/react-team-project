import React from "react";
import { ButtonAddTransactionStyled } from "./ButtonAddTransaction.styled";
import PropTypes from 'prop-types';
import { AiOutlinePlus } from "react-icons/ai";

export const ButtonAddTransaction = ({ onClick, children }) => {
    return(
        <ButtonAddTransactionStyled type="button" onClick={onClick}>
            <AiOutlinePlus width={20} height={20}/>
            {children}
        </ButtonAddTransactionStyled>
    )
};
ButtonAddTransaction.propTypes = {
    onClick: PropTypes.func
}

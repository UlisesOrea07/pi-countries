import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { HIDE_ERROR } from '../actions/actionsTypes';

const ErrorWarning = (props) => {
    const isOpen = useSelector(state => state.error.isOpen);
    const error = useSelector(state => state.error.error);
    const dispatch = useDispatch();

    function handleClose() {
        dispatch({ type: HIDE_ERROR });
    }

    return (
        <>
            {isOpen && error && (
                <Container >
                    <ClosedButton onClick={() => handleClose()}>X</ClosedButton>
                    <span>{error}</span>
                </Container>
            )}
        </>
    )
}
// Designe
const Container = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 10vh;
    color: white;
    background: red;
    opacity: 0.7;
    
    span{
        margin: 10px;
    }
`;
const ClosedButton = styled.button`
    background: none;
    border: none;
    border-radius: 5px;
    color: #1766dc;
    cursor: pointer;
    height: 30px;
    position: absolute;
    right: 15px;
    top: 5px;
    transition: all.3s ease all;
    width: 30px;
    font-size: 20px;
    &:hover{
        background: #f2f2f2;
    }
`;
export default ErrorWarning;
import styled from "styled-components"
import { useEffect, useState } from "react";

const WarningModal = ({ show }) => {

    return (
        <>
            {show &&
                <Overlay >
                    <ModalContainer>
                        <p>Add</p>
                        <p>Succefuly</p>
                        <img src="https://images.vexels.com/media/users/3/143372/isolated/lists/6e633a235ea0d523078e667b9f84f15b-marca-de-verificacion-azul.png" width="30px" />

                    </ModalContainer>
                </Overlay>
            }
        </>
    );
}
// Designe
const Overlay = styled.div`
    align-items: center;
    background: rgba(0,0,0,0.5);
    display: flex;
    height: 100vh;
    justify-content: center;
    left: 0;
    top: 0;
    padding: 40px;
    position: fixed;
    width: 100vw;
    z-index: 1;
`;
const ModalContainer = styled.div`
    background: #fff;
    border-radius: 5px;
    box-shadow: rgba(100,100,111,0.2), 0px 7px 29px 0px;
    height: 200px;
    padding: 20px;
    position: relative;
    width: 500px;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
`;



const ModalContent = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    h1{
        font-size: 42px;
        font-weight: 700;
        margin-bottom: 10px;
    }
    p{
        font-size: 18px;
        margin-bottom: 20px;
    }
`;


export default WarningModal;
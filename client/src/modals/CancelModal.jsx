import styled from "styled-components"
import { lightPrimary } from "../utils/Colors";


const AddCancel = ({ children, modalState, setModalState }) => {
    return (
        <>
            {modalState &&
                <Overlay>
                    <ModalContainer>
                        <ModalHead>
                            <h3>Information</h3>
                        </ModalHead>
                        <ClosedButton onClick={() => setModalState(false)}>
                            X
                        </ClosedButton>
                        <ModalContent>
                            <p>Are you sure to cancel?</p>
                        </ModalContent>
                        <ModalButtonsRow>
                            {children}
                        </ModalButtonsRow>
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
`;
const ModalHead = styled.div`
    align-items: center;
    display: flex;
    border-bottom: 1px solid #e8e8e8;
    margin-bottom: 20px;
    padding-bottom: 20px;
    justify-content: space-between;

    h3{
        font-weight: 500;
        font-size: 16px;
        color: #1766dc;
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
    right: 20px;
    top: 15px;
    transition: all 3s ease all;
    width: 30px;

    &:hover{
        background: #f2f2f2;
    }
`;

const ModalContent = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;

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

const ModalButtonsRow = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: center;
    padding: 2px;
`;

const Button = styled.button`
    background: #1766dc;
    border: none;
    border-radius: 100px;
    color: #fff;
    cursor: pointer;
    display: block;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    padding: 10px 30px;
    transition: .3s ease all;
    &:hover{
        background-color: #0066ff;
    }

`;
export default AddCancel;
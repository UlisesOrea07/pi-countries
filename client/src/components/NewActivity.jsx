import React, { useState } from "react";
import styled from "styled-components";
import AddCancel from "../modals/CancelModal";

const NewActivity = () => {
    const [modalState, setModalState] = useState(false);
    return (
        <>
            <AddCancel
                modalState={modalState}
                setModalState={setModalState}
            >
                <Button>
                    ok
                </Button>
                <Button>
                    Cancel
                </Button>
            </AddCancel>

            <Container>
                <Form>
                    <Title>
                        New Activity
                    </Title>
                    <Name placeholder="Name" />
                    <label>Dificulty <Dificulty type="number" /></label>
                    <label>Duration <Duration placeholder="days" /></label>
                    <Season>
                        <option defaultValue="Season" >Season</option>
                        <option value="spring">Spring</option>
                        <option value="summer">Summer</option>
                        <option value="autumn">Autumn</option>
                        <option value="winter">Winter</option>
                    </Season>
                    <Countries>
                        <option value="">Countries</option>
                    </Countries>
                    <Button type="submit">Add</Button>
                    <Button type="reset" onClick={() => setModalState(!modalState)}>Cancel</Button>
                </Form>
            </Container>
        </>
    );
}
//Designe 

const Container = styled.div`
    display: flex  ;    
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80vh;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 300px;
    align-items: center;
    justify-content: space-between;
    height: 60vh;
    padding: 10px;
    box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.345);
`;
const Title = styled.h1``;
const Name = styled.input`
    font-size: 16px;
    line-height: 28px;
    padding: 8px 16px;
    min-height: 44px;
    border: unset;
    border-radius: 4px;
    outline-color: rgb(84 105 212 / 0.5);
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(60, 66, 87, 0.16) 0px 0px 0px 1px;
    width: 100%;
`;
const Dificulty = styled.input`
    font-size: 16px;
    line-height: 28px;
    padding: 8px 16px;
    min-height: 44px;
    border: unset;
    border-radius: 4px;
    outline-color: rgb(84 105 212 / 0.5);
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(60, 66, 87, 0.16) 0px 0px 0px 1px;
    width: 40%;        
`;
const Duration = styled(Dificulty)``;
const Season = styled.select`
    font-size: 16px;
    line-height: 28px;
    padding: 8px 16px;
    min-height: 44px;
    border: unset;
    border-radius: 4px;
    outline-color: rgb(84 105 212 / 0.5);
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(60, 66, 87, 0.16) 0px 0px 0px 1px;
    width: 100%;
`;
const Countries = styled(Season)`   
`;
const Button = styled.button`
    font-size: 16px;
    line-height: 28px;
    border: none;
    cursor: pointer;
    padding: 8px 16px;
    min-height: 44px;
    border-radius: 4px;
    width: 100%;
`;
export default NewActivity;
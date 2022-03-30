import styled from "styled-components";
import { useState } from "react";

const Collapsible = ({ activity }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Container >
            <Toggle onClick={() => setIsOpen(!isOpen)}>
                {activity.name}
            </Toggle>
            <Content isOpen={isOpen}>
                <p>Season: <strong>{activity.season}</strong></p>
                <p>Difficulty: <strong>{activity.difficulty} points </strong></p>
                <p>Duration: <strong>{activity.duration} Days</strong></p>
            </Content>
        </Container>
    );
};
//designe
const Container = styled.div`
    width: 100%;
    height: auto;
    margin-top: 10px;    
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 10px;
`;

const Toggle = styled.button`
    font-size: 12px;
    height: 25px;
    border: none;
    text-decoration: none;
    cursor: pointer;
    border-radius: 4px;
    box-shadow: 0px .5px 2px rgba(0, 0, 0, 0.245);
    display: block;
`;
const Content = styled.div`
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    align-items: left;
    justify-content: center;
    padding: 10px;
    width: 100%;
    height: 70px;
    border: 1px solid #686868;
`;

export default Collapsible;

import React from "react";
import styled from "styled-components";

const Card = () => {
    return (
        <ContainerCard>
            <HeadCard>
                <span>Country</span>
                <h2>Mexico</h2>
            </HeadCard>
            <BodyCard>
                <span>Flag</span>
                <img src="https://flagcdn.com/w320/mx.png" width="80px" alt="imagen not found" />
            </BodyCard>
            <FooterCard>
                <span>Continent</span>
                <h3>America</h3>
            </FooterCard>
        </ContainerCard>
    );
}

//Designe
const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 150px;
    height: 180px;
    align-items: center;
    /* border: solid 3px; */
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.377);
    margin: 5px;
`;
const HeadCard = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2px;
    width: 100%;
    align-items: center;
`;
const BodyCard = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2px;
`;

const FooterCard = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2px;
`;

export default Card;
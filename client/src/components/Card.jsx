import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = ({ id, name, flag, continent }) => {
    return (
        <LINK to={`/details/${id}`} >
            <ContainerCard >
                <HeadCard>
                    {/* <span>Country</span> */}
                    <h2>{name}</h2>
                </HeadCard>
                <BodyCard>
                    <img src={flag} width="80px" alt="imagen not found" />
                </BodyCard>
                <FooterCard>
                    <span>Continent</span>
                    <h3>{continent}</h3>
                </FooterCard>
            </ContainerCard>
        </LINK >
    );
}

//Designe
const ContainerCard = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    width: 300px;
    height: 180px;
    align-items: center;
    /* border: solid 3px; */
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.377);
    margin: 5px;
`;
const HeadCard = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 16px;
    text-align: center;
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
const LINK = styled(Link)`
    text-decoration: none;
`;

export default Card;
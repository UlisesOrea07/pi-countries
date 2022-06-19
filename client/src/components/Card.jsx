import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { darkPrimary, darkSecundary, lightPrimary, lightSecundary } from "../utils/Colors";

const Card = ({ id, name, flag, continent, population, area, subregion }) => {
    return (
        <LINK to={`/details/${id}`} >
            <ContainerCard >
                <HeadCard>
                    <h3>{name}</h3>
                </HeadCard>
                <BodyCard>
                    <SectionLeft>
                        <Img src={flag} width="80px" alt="imagen not found" />


                    </SectionLeft>
                    <SectionRigth>
                        <span>Population:</span> <strong>{new Intl.NumberFormat().format(population)}</strong>
                        <span>Area:</span> <strong>{new Intl.NumberFormat('en-US', {
                            style: 'unit',
                            unit: 'kilometer'
                        }).format(area)}</strong>
                    </SectionRigth>
                </BodyCard>
                <FooterCard>
                    <h3><strong>{continent}</strong></h3>
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
    margin: 10px;
`;
const HeadCard = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 16px;
    text-align: center;
    border-radius: 4px;
    padding: 2px;
    margin: 4px;
    width: 96%;
    align-items: center;
    justify-content: center;
    color: ${darkPrimary};
    background: ${lightPrimary};
`;
const BodyCard = styled.div`
    display: flex;
    flex-direction: row;
    padding: 2px;
    width: 100%;
    align-items: center;
    font-size: 12px;
    color: ${darkPrimary};
`;
const SectionLeft = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2px;
    margin: 4px;
    align-items: center;
    justify-content: center;
    width: 50%;
`;
const SectionRigth = styled(SectionLeft)`
    justify-content: left;
    align-items: flex-start;
`;
const FooterCard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 2px;
    width: 100%;
`;

const Img = styled.img`
    border: 4px solid;
    /* height: 68px; */
`;
const LINK = styled(Link)`
    text-decoration: none;
    outline: none;
`;

export default Card;
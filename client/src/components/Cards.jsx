import React from "react";
import styled from "styled-components";
import Card from "./Card";

const Cards = () => {
    return (
        <Container>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </Container>
    )
}
//designe 
const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;
export default Cards;
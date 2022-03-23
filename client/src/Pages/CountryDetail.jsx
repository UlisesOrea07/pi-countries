import React from "react";
import styled from "styled-components";

const CountryDetail = () => {
    return (
        <Container>
            <Title>
                Mexico
            </Title>
            <Information>
                <p><span>Oficial name: </span> Estados Unidos Mexicanos</p>
                <p><span>Continent: </span> America</p>
                <p><span>Capital: </span> CDMX</p>
                <p><span>Subregion: </span> North America</p>
                <p><span>Area: </span> 1964375</p>
                <p><span>Population</span> 128932753</p>
            </Information>
            <ImageContainer>
                <h4>Flag</h4>
                <img src="https://flagcdn.com/w320/mx.png" width="200px" alt="imge not found" />
            </ImageContainer>
            <ActivityContainer>
                <h3>Tourist Activities</h3>
                <p>Example1</p>
                <p>Example1</p>
                <p>Example1</p>
                <p>Example1</p>
                <p>Example1</p>
            </ActivityContainer>
        </Container>
    )
}
//Designe
const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    height: 80vh;
`;
const Title = styled.h1``;
const Information = styled.div`
    display: flex;
    flex-direction: column;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 300;
`;
const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;
const ActivityContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;
export default CountryDetail;
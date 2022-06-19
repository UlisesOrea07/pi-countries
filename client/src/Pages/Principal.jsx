
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import heroMobile from '../images/heroMobile.jpg';
import heroNormal from '../images/heroNormal.jpg';
const Principal = () => {

    return (
        <Container>
            <Title>
                Countries App
            </Title>
            <Description>
                Get information about countries
            </Description>
            <Link to='/home'>
                <Button>Go start</Button>
            </Link>
        </Container>
    );
}
//Designe
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100vh;
    overflow: hidden;
    background-image: url(${heroNormal});
    background-size: cover;
    background-position: center center center;
    position: relative;    
    width: 100vw;
    /* margin-top: 80px; */
    @media(max-width: 768px){
        background-image: url(${heroMobile});
        background-repeat: no-repeat;
        background-size: cover;
        margin-top: 20px;
        background-position: top;
        justify-content: start;
        align-items: center;
        height: 100vh;
    }
`;
const Title = styled.h1`
    font-size: 48px;
    letter-spacing: 0.2em;
    color: white;
    margin-top: 80px;
`;
const Description = styled.h3`
    margin: 20px;
    display: block;
    font-size: 26px;
    color: beige;
    text-shadow: 0 0 10px black;
    text-align: center;
`;
const Button = styled.button`
    border: 0;
    color: white;
    padding: 10px 24px;
    font-size: 20px;
    text-decoration: none;
    background: lightblue;
    border-radius: 8px;
    transition: 0.3s all;
    &:hover{
        opacity: 0.8;
    }
`;
export default Principal;
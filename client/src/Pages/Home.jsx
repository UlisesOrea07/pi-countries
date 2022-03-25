import styled from "styled-components";
import Cards from "../components/Cards";
import Searchbar from "../components/Searchbar";


const Home = () => {
    return (
        <Container>
            <Searchbar />
            <Cards />
        </Container>
    );
};

//Designe
const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-top: 80px;
`;
export default Home;
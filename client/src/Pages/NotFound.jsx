import styled from 'styled-components';

const NotFound = () => {
    return (
        <Container>
            <Content>
                <h3>Page not found</h3>
                <h1>404</h1>
            </Content>
        </Container>
    );
}
//Designe

const Container = styled.div`
    width: 100%;
    height: 50vh;
    justify-content: center;
    align-items: center;
    display: flex;
`;
const Content = styled.div`
    width: 50%;
    height: auto;
    box-shadow: rgba(100,100,111,0.2), 0px 7px 29px 0px;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    text-align: center;
    h3{
        font-weight: bold;
        font-size: 44px;
    }

    h1{
        font-size: 120px;
        font-weight: 900;
    }

`;
export default NotFound;

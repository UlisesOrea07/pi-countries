import styled from "styled-components";

const ResponseWarning = () => {
    return (
        <Menssage>
            <h2>Result not faound</h2>
        </Menssage>
    );
}
//designe
const Menssage = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 10vh;
    color: white;
    background: lawngreen;
`;
export default ResponseWarning;
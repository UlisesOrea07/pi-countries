import styled from "styled-components";
const Pill = ({ country, onClose }) => {
    return (
        <PillContainer>
            <PillImg src={country.flag} width="25px" height="14px" />
            <PillText>{country.id}</PillText>
            <ClosedPill onClick={(e) => onClose(country.id, e)}>X</ClosedPill>
        </PillContainer>
    );
}
//Designe
const PillContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    margin-right: 10px;
    margin-bottom: 10px;
    width: 78px;
    height: 30px;
    background: lightblue;
    
   
    border-radius: 4px;
`;
const PillText = styled.p`
    line-height: 2; 
    font-size: 14px;
    margin: 0 2px 0 2px;
`;
const PillImg = styled.img``;
const ClosedPill = styled.button`
    border: none;
    width: 13px;
    height: 17px;
    padding: 0;
    opacity: .8;
`;
export default Pill;
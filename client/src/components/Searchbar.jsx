import React from "react";
import styled from "styled-components";

const Searchbar = () => {
    return (
        <Wrapper>
            <SeacrhContainer>
                <Search type="search" placeholder="Search Country" />
                <SearchButton>Search</SearchButton>
            </SeacrhContainer>

        </Wrapper>
    )
}

const Wrapper = styled.div`
   width: 300px;
   margin: 30px auto;
`;
const Search = styled.input`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;   
    font-size: 18px;
    line-height: 28px;
    padding: 8px 16px;
    border: unset;
    border-radius: 4px;
    outline-color: rgb(84 105 212 / 0.5);
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(60, 66, 87, 0.16) 0px 0px 0px 1px;
    width: 100%;    
`;
const SeacrhContainer = styled.div`
    position: relative;
    width: 300px;
    height: 30px;
`;
const SearchButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    width: 60px;
    height: 100%;
    background: lightblue;
    border: 0;
    cursor: pointer;
    `;


export default Searchbar;
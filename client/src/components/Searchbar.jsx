import React from "react";
import styled from "styled-components";

const Searchbar = () => {
    return (
        <Wrapper>
            <Search type="search" placeholder="Search Country" />

        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    align-items: center;
    flex-wrap: wrap;
`;
const Search = styled.input`
font-size: 16px;
    line-height: 28px;
    padding: 8px 16px;
    min-height: 44px;
    border: unset;
    border-radius: 4px;
    outline-color: rgb(84 105 212 / 0.5);
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(60, 66, 87, 0.16) 0px 0px 0px 1px;
    width: 100%;    
`;


export default Searchbar;
import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { getCountryByName } from "../actions/countriesAction"

const Searchbar = () => {
    const [expresion, setExpresion] = useState('');
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setExpresion(event.target.value);
    };

    const handleSearch = (event) => {
        event.preventDefault();
        if (expresion.trim() === '') return null;
        dispatch(getCountryByName(expresion));
    }
    return (
        <Wrapper>
            <SeacrhContainer onSubmit={handleSearch}>
                <Search onChange={handleChange} type="text" placeholder="Search Country" />
                <SearchButton onClick={handleSearch} type="submit">Search</SearchButton>
            </SeacrhContainer>

        </Wrapper>
    )
}

const Wrapper = styled.div`
   width: 300px;
   margin: 10px auto;
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
const SeacrhContainer = styled.form`
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
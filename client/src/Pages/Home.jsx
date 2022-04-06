import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { getCountries } from "../actions/countriesAction";
import Cards from "../components/Cards";
import Pagination from "../components/Pagination";
import Searchbar from "../components/Searchbar";
import Toolbar from "../components/Toolbar";

const Home = () => {
    const dispatch = useDispatch();
    const countries = useSelector(state => state.countries.countriesLoaded);
    const [currentCountries, setCurrentCountries] = useState([]);
    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch]);

    const onPageChanged = data => {
        const { currentPage, pageLimit } = data;
        const offset = (currentPage - 1) * pageLimit;
        const currentCountries = countries?.slice(offset, offset + pageLimit);
        setCurrentCountries(currentCountries);
    }
    const totalCountries = countries?.length;
    return (
        <Container>
            <Searchbar countries={countries} />
            <Toolbar countries={countries} />
            <Cards currentCountries={currentCountries} />
            <Pagination totalRecords={totalCountries} pageLimit={9} onPageChanged={onPageChanged} />
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
    align-items: center;
`;
export default Home;
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../actions/countriesAction';
import Loading from "./Loading";
import Pagination from "./Pagination";
const Cards = () => {
    const dispatch = useDispatch();
    const countries = useSelector(state => state.countries.countriesLoaded);
    const loading = useSelector(state => state.countries.load);

    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch]);

    const [currentCountries, setCurrentCountries] = useState([]);

    const onPageChanged = data => {
        const { currentPage, pageLimit } = data;
        const offset = (currentPage - 1) * pageLimit;
        const currentCountries = countries?.slice(offset, offset + pageLimit);
        setCurrentCountries(currentCountries);
    }

    const totalCountries = countries?.length;

    return (

        loading ? <Loading /> :
            <>
                <Container>
                    {
                        currentCountries?.map(country => {
                            return (
                                <Card
                                    key={country.id}
                                    id={country.id}
                                    name={country.name}
                                    flag={country.flag}
                                    continent={country.continent}
                                />
                            )
                        })

                    }
                    <Pagination totalRecords={totalCountries} pageLimit={9} onPageChanged={onPageChanged} />

                </Container>
            </>
    )
}
//designe 
const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;
export default Cards;
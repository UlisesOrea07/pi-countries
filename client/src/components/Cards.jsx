import React, { useEffect } from "react";
import styled from "styled-components";
import Card from "./Card";
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../actions/countriesAction';
import Loading from "./Loading";
const Cards = () => {
    const dispatch = useDispatch();
    const countries = useSelector(state => state.countries.countriesLoaded);
    const loading = useSelector(state => state.countries.load);
    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch]);


    return (

        loading ? <Loading /> :
            <Container>
                {
                    countries?.map(country => {
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
            </Container>
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
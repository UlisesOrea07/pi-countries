import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getCountry } from "../actions/countriesAction";
import Loading from "../components/Loading";

const CountryDetail = () => {
    const loading = useSelector(state => state.countries.load);
    const { id } = useParams();
    const dispatch = useDispatch();
    // const { name, continent, capital, subregion, area, population, flag } = country;
    console.log(loading + "1111111")
    useEffect(() => {
        dispatch(getCountry(id));
    }, [dispatch]);
    const country = useSelector(state => state.countries.countryDetail)
    console.log(country);
    return (
        loading ? <Loading /> : country ?
            <Container>
                <Title>
                    {country.name}
                </Title>
                <Information>
                    <p><span>Oficial name: </span> {country.name}</p>
                    <p><span>Continent: </span> {country.continent}</p>
                    <p><span>Capital: </span> {country.capital}</p>
                    <p><span>Subregion: </span> {country.subregion}</p>
                    <p><span>Area: </span> {country.area}</p>
                    <p><span>Population</span> {country.population}</p>
                </Information>
                <ImageContainer>
                    <h4>Flag</h4>
                    <img src={country.flag} width="200px" alt="imge not found" />
                </ImageContainer>
                <ActivityContainer>
                    <h3>Tourist Activities</h3>
                    {
                        country?.activities?.map(activity => {
                            return (
                                <p key={activity.id}>{activity.name}</p>
                            )

                        })
                    }
                </ActivityContainer>
            </Container> : null
    )
}
//Designe
const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
    height: 80vh;
    margin-top: 80px;
`;
const Title = styled.h1``;
const Information = styled.div`
    display: flex;
    flex-direction: column;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 300;
`;
const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;
const ActivityContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;
export default CountryDetail;
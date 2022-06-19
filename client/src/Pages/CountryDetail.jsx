import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getCountry } from "../actions/countriesAction";
import Collapsible from "../components/Collapsible";
import Loading from "../components/Loading";

const CountryDetail = () => {
    const loading = useSelector(state => state.countries.load);
    const { id } = useParams();
    const dispatch = useDispatch();
    // const { name, continent, capital, subregion, area, population, flag } = country;
    useEffect(() => {
        dispatch(getCountry(id));
    }, [dispatch]);
    const country = useSelector(state => state.countries.countryDetail)
    return (
        loading ? <Loading /> : country ?
            <Container>
                <Title>
                    {country.name}
                </Title>
                <Information>
                    <p><span>Oficial name: </span><strong>{country.name}</strong> </p>
                    <p><span>Continent: </span> <strong>{country.continent}</strong> </p>
                    <p><span>Capital: </span> <strong> {country.capital}</strong></p>
                    <p><span>Subregion: </span> <strong>{country.subregion}</strong></p>
                    <p><span>Area: </span> <strong>{new Intl.NumberFormat('en-US', {
                        style: 'unit',
                        unit: 'kilometer'
                    }).format(country.area)}</strong></p>
                    <p><span>Population</span> <strong>{new Intl.NumberFormat().format(country.population)}</strong></p>
                </Information>
                <ImageContainer>
                    <h4>Main Flag</h4>
                    <br/>
                    <Img src={country.flag} width="200px" alt="imge not found" />
                </ImageContainer>
                <ActivityContainer>
                    <h3>Tourist Activities</h3>
                    {
                        country?.activities?.length > 0 ? country.activities.map(activity => {
                            return (
                                <Collapsible key={activity.id} activity={activity} />
                            )
                        })
                            : <h3>No activities</h3>
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
    padding: 10px;
    height: 90vh;
    margin-top: 80px;
`;
const Title = styled.h1`

`;
const Information = styled.div`
    display: flex;
    flex-direction: column;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 200;
    p{
        font-size: 20px;
    }
`;
const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;
const ActivityContainer = styled.div`
    display: flex;
    width: 300px;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;
const Img = styled.img`
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.377);    
`;
export default CountryDetail;
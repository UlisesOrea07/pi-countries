import styled from "styled-components";
import Card from "./Card";
import { useSelector } from 'react-redux';
import Loading from "./Loading";
const Cards = ({ currentCountries }) => {
    const loading = useSelector(state => state.countries.load);

    return (
        loading ? <Loading /> :
            currentCountries?.length === 0 ? <NoRsult>We're sorry, your search returned no results.</NoRsult> :
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
                                        population={country.population}
                                        area={country.area}
                                    />
                                )
                            })

                        }

                    </Container>
                </>
    )
}
//designe 
// const Container = styled.div`
//     display: flex;
//     flex-direction: column;
//     flex-wrap: wrap;
//     align-items: center;
//     justify-content: space-between;
//     width: 100%;
// `;
const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 72%;
`;
const NoRsult = styled.p`
    margin: 20px;
    font-size: 14px;
    font-weight: bold;
    color: red;
`;
export default Cards;
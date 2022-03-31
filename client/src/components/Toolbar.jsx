import { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getContinents, getCountriesByActivity, getCountriesByContinent, orderAlphaA, orderAlphaZ, orderAsc, orderDesc } from "../actions/countriesAction";
import { getActivities } from "../actions/activitiesAction";

const Toolbar = () => {
    const [orderAlpha, setOrderAlpha] = useState(true);
    const [orderPopulation, setOrderPopulation] = useState(true);
    const [capital, setcapital] = useState('A-Z');
    const [arrow, setArrow] = useState('%E2%86%93 %E2%86%91');
    const countries = useSelector(state => state.countries.countriesLoaded);
    const activities = useSelector(state => state.activities.activitiesLoaded);
    const continents = useSelector(state => state.countries.continentsLoaded);
    const dispatch = useDispatch();
    const [filterSelected, setFilterSelected] = useState([]);
    const [isActivity, setIsActivity] = useState(true);
    useEffect(() => {
        dispatch(getContinents());
        dispatch(getActivities());
    }, [dispatch])
    const handleFilter = (e) => {
        const filter = e.target.value;
        if (filter === "Activity") {
            dispatch(getActivities());
            setFilterSelected(activities);
            setIsActivity(true);
        } else if (filter === "Continent") {
            dispatch(getContinents());
            console.log(continents)
            setFilterSelected(continents);
            setIsActivity(false);
        } else {
            setFilterSelected([]);
        }
    };
    const handlerAction = (e) => {
        const action = e.target.value;
        if (!isActivity) {
            dispatch(getCountriesByContinent(action));

        } else {
            dispatch(getCountriesByActivity(action));
        }
    };

    const handlerOrderAlpha = (e) => {
        e.preventDefault();
        if (orderAlpha) {
            dispatch(orderAlphaA(countries));
            setOrderAlpha(!orderAlpha);
            setcapital('A-Z');
        } else {
            dispatch(orderAlphaZ(countries));
            setOrderAlpha(!orderAlpha);
            setcapital('Z-A');
        }
    };

    const handlerOrderPopulation = (e) => {
        e.preventDefault();
        if (orderPopulation) {
            dispatch(orderAsc(countries));
            setOrderPopulation(!orderPopulation);
            setArrow('%E2%86%93 %E2%86%91');
        } else {
            dispatch(orderDesc(countries));
            setOrderPopulation(!orderPopulation);
            setArrow('%E2%86%91 %E2%86%93');
        }
    };
    return (
        <Container>
            <Filter name="filters" onChange={handleFilter}>
                <option value="">Filters</option>
                <option value="Activity">Activity</option>
                <option value="Continent">Continent</option>
            </Filter>
            <Filter name="actions" onChange={handlerAction}>
                <option value="">Select</option>
                {
                    filterSelected?.map((item, index) => {
                        return (
                            <option key={item + index} value={item}>{item}</option>
                        );
                    })
                }

            </Filter>
            <OrderButton onClick={handlerOrderAlpha}>
                <Letter>{capital[0]}</Letter> - {capital[2]}
            </OrderButton>
            <OrderButton onClick={handlerOrderPopulation}>
                POP <Letter>{decodeURI(arrow)}</Letter>
            </OrderButton>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 10px;
`;
const OrderButton = styled.button`
    font-size: 11px;
    height: 30px;
    border: none;
    padding: 1px;
    cursor: pointer;
    border-radius: 4px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.245);
    width: 50px;
`;
const Letter = styled.span`
    color: red;
    font-weight: bolder;
    font-family: sans-serif;
    font-size: 18px;
`;
const Filter = styled.select`
    font-size: 12px;
    height: 30px;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.245);
    width: 80px;
    outline-color: rgb(84 105 212 / 0.5);
    background-color: rgb(255, 255, 255);
`;

export default Toolbar;
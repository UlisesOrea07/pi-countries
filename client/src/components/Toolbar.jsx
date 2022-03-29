import { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { orderAlphaA, orderAlphaZ, orderAsc, orderDesc } from "../actions/countriesAction";

const Toolbar = () => {
    const [orderAlpha, setOrderAlpha] = useState(true);
    const [orderPopulation, setOrderPopulation] = useState(true);
    const [capital, setcapital] = useState('A-Z');
    const [arrow, setArrow] = useState('%E2%86%93 %E2%86%91');
    const countries = useSelector(state => state.countries.countriesLoaded);
    const dispatch = useDispatch();

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
            <Filter>
                filter
            </Filter>
            <OrderButton onClick={handlerOrderAlpha}>
                <Letter>{capital[0]}</Letter> - {capital[2]}
            </OrderButton>
            <OrderButton onClick={handlerOrderPopulation}>
                score <Letter>{decodeURI(arrow)}</Letter>
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
    font-size: 12px;
    height: 25px;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.245);
    width: 70px;
`;
const Letter = styled.span`
    color: red;
    font-weight: bolder;
    font-family: sans-serif;
    font-size: 18px;
`;
const Filter = styled.button``;


export default Toolbar;
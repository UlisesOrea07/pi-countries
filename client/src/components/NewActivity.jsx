import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import AddCancel from "../modals/CancelModal";
import { getCountries } from "../actions/countriesAction";
import Pill from "./Pill";
import { postActivity } from "../actions/activitiesAction";
import { useNavigate } from "react-router-dom";
import WarningModal from "../modals/WarningModal";

const NewActivity = () => {
    const [modalState, setModalState] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const Allcountries = useSelector(state => state.countries.countriesLoaded);
    const [countrySelected, setCountrySelected] = useState([]);

    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch]);

    const [newActivity, setNewActivity] = useState({
        name: "",
        difficulty: 0,
        duration: 0,
        season: "",
        countries: []
    });
    const [validations, setValidations] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countries: ""
    });

    const onClose = (id, e) => {
        e.preventDefault();
        const country = Allcountries.filter(c => c.id === id);
        setCountrySelected(countrySelected?.filter(country => country.id !== id));
        country[0].isDisable = false;
        // setNewActivity({ ...newActivity, countries: newActivity.countries?.filter(c => c.id !== id) });
        setNewActivity({ ...newActivity, countries: newActivity.countries?.filter(c => id !== id) })
        console.log(newActivity.countries)
    }
    const handleSelectCountries = (e) => {
        e.preventDefault();
        const country = Allcountries.filter(c => c.name === e.target.value);
        setCountrySelected([country[0], ...countrySelected]);
        country[0].isDisable = true;
        // setNewActivity({ ...newActivity, countries: [country[0], ...newActivity.countries] });
        setNewActivity({ ...newActivity, countries: [country[0].id, ...newActivity.countries] })
    };


    const validateAllValues = () => {
        const { name, difficulty, duration, season, countries } = newActivity;
        const validations = { name: "", difficulty: "", duration: "", season: "", countries: "" };
        let isValid = true;
        if (name.trim() === '') {
            validations.name = "Name is required!";
            isValid = false;
        };
        if (!difficulty) {
            validations.difficulty = "Difficulty is required!";
            isValid = false;
        };
        if (!duration) {
            validations.duration = "Duration is required!";
            isValid = false;
        };
        if (!season) {
            validations.season = "Season is required!";
            isValid = false;
        };
        if (countries.length < 1) {
            validations.countries = "Countries axxe required!";
            isValid = false;
        }
        if (!isValid) {
            setValidations(validations);
        }

        return isValid;

    };

    const validatePerValues = (e) => {
        const { name } = e.target;
        const value = newActivity[name];
        let message = "";

        if (!value) {
            message = `${name} is required!`;
        }
        if (name === "name" && value.trim() === "") {
            message = `${name} is required!`;
        }
        setValidations({ ...validations, [name]: message });
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewActivity({ ...newActivity, [name]: value })
    };

    const handleCancel = (e) => {
        e.preventDefault();
        const { name, difficulty, duration, season, countries } = newActivity;
        if (!name && !difficulty && !duration && !season && countries.length < 1) navigate('/home');
        setModalState(!modalState)
    }
    const [show, setShow] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validateAllValues();
        if (!isValid) {
            return false;
        };
        dispatch(postActivity(newActivity));

        setShow(!show)
        setTimeout(function () {
            navigate('/home');
        }, 2000)

    };
    const { name, difficulty, duration, season, countries } = validations;
    return (
        <>
            <AddCancel
                modalState={modalState}
                setModalState={setModalState}
            >
                <Button onClick={() => navigate('/home')}>
                    ok
                </Button>
                <Button onClick={() => setModalState(!modalState)}>
                    Cancel
                </Button>
            </AddCancel>
            <WarningModal show={show} />
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Title>
                        New Activity
                    </Title>
                    <Name placeholder="Name" name="name" onChange={handleChange} onBlur={validatePerValues} />
                    <span>{name}</span>
                    <label>Dificulty <Dificulty name="difficulty" onChange={handleChange} onBlur={validatePerValues} /></label>
                    <span>{difficulty}</span>
                    <label>Duration <Duration name="duration" placeholder="days" onChange={handleChange} onBlur={validatePerValues} /></label>
                    <span>{duration}</span>
                    <Season name="season" onChange={handleChange} onBlur={validatePerValues}>
                        <option value="">Season</option>
                        <option value="spring">Spring</option>
                        <option value="summer">Summer</option>
                        <option value="autumn">Autumn</option>
                        <option value="winter">Winter</option>
                    </Season>
                    <span>{season}</span>
                    {/* <Countries list="countries" onBlur={handleSelectCountries} />

                    <datalist id="countries" > */}
                    <SelectCountry name="countries" onChange={handleSelectCountries} onBlur={validatePerValues} >
                        {/* <option value="">Countries</option> */}
                        {
                            Allcountries?.map(country => {
                                return (
                                    <option key={country.id} value={country.name} disabled={country.isDisable}> {country.name}</option>
                                );
                            })
                        }
                    </SelectCountry>
                    <span>{countries}</span>
                    {/* </datalist> */}

                    <CountryBox>
                        {
                            countrySelected?.map(country => {
                                return (
                                    <Pill key={country.id} country={country} onClose={onClose} />
                                );
                            })
                        }
                    </CountryBox>
                    <Button type="submit" onClick={handleSubmit}>Add</Button>
                    <Button type="reset" onClick={handleCancel}>Cancel</Button>
                </Form>
            </Container>
        </>
    );
}
//Designe 

const Container = styled.div`
                        display: flex  ;
                        align-items: center;
                        justify-content: center;
                        width: 100%;
                        height: 600px;
                        margin-top: 85px;
                        `;
const Form = styled.form`
                        display: flex;
                        flex-direction: column;
                        width: 300px;
                        align-items: center;
                        justify-content: space-between;
                        height: 100%;
                        padding: 10px;
                        box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.345);
                        `;
const Title = styled.h1``;
const Name = styled.input`
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
const Dificulty = styled.input.attrs(
    { type: "number" }
)`
                        font-size: 16px;
                        line-height: 28px;
                        padding: 8px 16px;
                        min-height: 44px;
                        border: unset;
                        border-radius: 4px;
                        outline-color: rgb(84 105 212 / 0.5);
                        background-color: rgb(255, 255, 255);
                        box-shadow: rgba(60, 66, 87, 0.16) 0px 0px 0px 1px;
                        width: 40%;
                        `;
const Duration = styled(Dificulty)``;
const Season = styled.select`
                        /* appearance: none; */
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
const Countries = styled(Name)`
                        `;
const Button = styled.button`
                        font-size: 16px;
                        line-height: 28px;
                        border: none;
                        cursor: pointer;
                        padding: 8px 16px;
                        min-height: 44px;
                        border-radius: 4px;
                        width: 100%;
                        `;

const CountryBox = styled.div`
    appearance: none;
    overflow-x: auto;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
                        line-height: 28px;
                        padding: 8px 8px;
                        max-height: 44px;
                        min-height: 44px;
                        border: unset;
                        border-radius: 4px;
                        outline-color: rgb(84 105 212 / 0.5);
                        background-color: rgb(255, 255, 255);
                        box-shadow: rgba(60, 66, 87, 0.16) 0px 0px 0px 1px;
                        width: 100%;
`;
const SelectCountry = styled(Season)``;

export default NewActivity;
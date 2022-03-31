import { GET_COUNTRIES, GET_COUNTRY, GET_CONTINENTS, GET_COUNTRIES_BY_CONTINENT, GET_COUNTRIES_BY_ACTIVITY, LOAD, ORDER_ALPHA_AZ, ORDER_ALPHA_ZA, ORDER_POPULATION_ASC, ORDER_POPULATION_DESC } from "../actions/actionsTypes";

const initialState = {
    countriesLoaded: [],
    continentsLoaded: [],
    countryDetail: {},
    load: false
};

export const countriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countriesLoaded: action.payload,
                load: false,
                error: null
            }
        case GET_COUNTRY:
            return {
                ...state,
                countryDetail: action.payload,
                load: false,
                error: null
            }
        case GET_CONTINENTS:
            return {
                ...state,
                continentsLoaded: action.payload,
                load: false,
                error: null
            }
        case GET_COUNTRIES_BY_CONTINENT:
            return {
                ...state,
                countriesLoaded: action.payload,
                load: false,
                error: null
            }
        case GET_COUNTRIES_BY_ACTIVITY:
            return {
                ...state,
                countriesLoaded: action.payload,
                load: false,
                error: null
            }
        case LOAD:
            return {
                load: true
            }

        case ORDER_ALPHA_AZ:
            return {
                ...state,
                countriesLoaded: action.payload,
            }
        case ORDER_ALPHA_ZA:
            return {
                ...state,
                countriesLoaded: action.payload,
            }

        case ORDER_POPULATION_ASC:
            return {
                ...state,
                countriesLoaded: action.payload
            }
        case ORDER_POPULATION_DESC:
            return {
                ...state,
                countriesLoaded: action.payload
            }


        default: return state;
    }
};
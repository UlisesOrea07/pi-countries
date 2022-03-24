import { GET_COUNTRIES, GET_COUNTRY, LOAD, ERROR } from "../actions/actionsTypes";

const initialState = {
    countriesLoaded: [],
    countryDetail: {},
    busy: false,
    error: null
};

export const countriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countriesLoaded: action.payload
            }
        case GET_COUNTRY:
            return {
                ...state,
                countryDetail: action.payload
            }
        case LOAD:
            return {
                busy: true,
                error: null
            }

        case ERROR:
            return {
                busy: false,
                error: action.payload
            }

        default: return state;
    }
};
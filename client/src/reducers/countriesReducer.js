import { GET_COUNTRIES, GET_COUNTRY, LOAD, ERROR } from "../actions/actionsTypes";

const initialState = {
    countriesLoaded: [],
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
        case LOAD:
            return {
                load: true
            }

        default: return state;
    }
};
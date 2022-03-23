import { GET_COUNTRIES, GET_COUNTRY, LOAD, ERROR } from "../actions/actionsTypes";
const initialState = {
    countriesLoaded: [],
    countryDetail: {},
    busy: false,
    error: null
};

const countriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countriesLoaded: action.payload,
                busy: false,
                error: null
            }
        case GET_COUNTRY:
            return {
                ...state,
                countryDetail: action.payload,
                busy: false,
                error: null
            }
        case LOAD:
            return {
                ...state,
                busy: true,
                error: null
            }
        case ERROR:
            return {
                ...state,
                busy: false,
                error: action.payload
            }
        default: return state;
    }
};
export default countriesReducer;
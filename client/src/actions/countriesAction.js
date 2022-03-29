import { GET_COUNTRIES, GET_COUNTRY, LOAD, ORDER_ALPHA_ZA, ORDER_ALPHA_AZ, ORDER_POPULATION_ASC, ORDER_POPULATION_DESC } from "./actionsTypes";
const BASEURL = 'http://localhost:3001';

export const getCountries = () => {
    return dispatch => {
        try {
            dispatch({
                type: LOAD
            })
            return fetch(`${BASEURL}/countries`)
                .then(response => response.json())
                .then(json => {
                    if (json.status === "ok") {
                        dispatch({
                            type: GET_COUNTRIES,
                            payload: json.data,
                            error: null
                        })
                    } else {
                        dispatch({
                            type: GET_COUNTRIES,
                            payload: null,
                            error: json.error
                        })
                    }
                });
        } catch (error) {
            dispatch({
                type: GET_COUNTRIES,
                payload: null,
                error: error
            })
        }
    }
};

export const getCountryByName = (expresion) => {
    return dispatch => {
        try {
            dispatch({
                type: LOAD
            });
            return fetch(`${BASEURL}/countries?expresion=${expresion}`)
                .then(response => response.json())
                .then(json => {
                    if (json.status === 'ok') {
                        dispatch({
                            type: GET_COUNTRIES,
                            payload: json.data,
                            error: null
                        });
                    } else {
                        dispatch({
                            type: GET_COUNTRIES,
                            payload: null,
                            error: json.error
                        })
                    }
                });
        } catch (error) {
            dispatch({
                type: GET_COUNTRIES,
                payload: null,
                error: error
            })
        }
    }
};

export const getCountry = (id) => {
    return dispatch => {
        try {
            dispatch({
                type: LOAD
            })
            return fetch(`${BASEURL}/country/${id}`)
                .then(response => response.json())
                .then(json => {
                    if (json.status === 'ok') {
                        dispatch({
                            type: GET_COUNTRY,
                            payload: json.data,
                            error: null
                        })
                    } else {
                        dispatch({
                            type: GET_COUNTRY,
                            payload: null,
                            error: json.error
                        })
                    }

                });
        } catch (error) {
            dispatch({
                type: GET_COUNTRY,
                payload: null,
                error: error
            });
        }
    };
};

export const orderAlphaA = (array) => {
    return dispatch => {
        array.sort((a, b) => {
            if (a.name > b.name) return 1;
            if (a.name < b.name) return -1;
            return 0
        })
        dispatch({
            type: ORDER_ALPHA_AZ,
            payload: [...array]
        })
    }
};

export const orderAlphaZ = (array) => {
    return dispatch => {
        array.reverse((a, b) => {
            if (a.name > b.name) return 1;
            if (a.name < b.name) return -1;
            return 0
        })
        dispatch({
            type: ORDER_ALPHA_ZA,
            payload: [...array]
        })
    }
};

export const orderAsc = (array) => {
    return dispatch => {
        array.sort((a, b) => a.population - b.population);
        dispatch({
            type: ORDER_POPULATION_ASC,
            payload: [...array]
        })
    }
};

export const orderDesc = (array) => {
    return dispatch => {
        array.reverse((a, b) => a.population - b.population);
        dispatch({
            type: ORDER_POPULATION_DESC,
            payload: [...array]
        })
    }
};

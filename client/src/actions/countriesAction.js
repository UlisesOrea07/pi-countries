import { GET_COUNTRIES, GET_COUNTRY, LOAD, ERROR } from "./actionsTypes";
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
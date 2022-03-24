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
                .then(data => {
                    if (data.length > 0) {
                        dispatch({
                            type: GET_COUNTRIES,
                            payload: data
                        })
                    } else {
                        dispatch({
                            type: ERROR,
                            payload: data
                        })
                    }
                });
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error,
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
                .then(data => {
                    dispatch({
                        type: GET_COUNTRY,
                        payload: data
                    })
                });
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error,
            });
        }
    };
};
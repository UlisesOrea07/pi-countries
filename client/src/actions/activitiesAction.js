import { GET_ACTIVITIES, ADD_ACTIVITY, LOAD } from "./actionsTypes";
const BASEURL = 'http://localhost:3001';

export const getActivities = () => {
    return (dispatch) => {
        try {
            // dispatch({
            //     type: LOAD
            // })
            return fetch(`${BASEURL}/activities`)
                .then(response => response.json())
                .then(json => {
                    if (json.status) {
                        dispatch({
                            type: GET_ACTIVITIES,
                            payload: json.data,
                            error: null
                        })
                    } else {
                        dispatch({
                            type: GET_ACTIVITIES,
                            payload: null,
                            error: json.error
                        })
                    }
                })
        } catch (error) {
            dispatch({
                type: GET_ACTIVITIES,
                payload: null,
                error: error
            })
        }
    }
};

export const postActivity = (activity) => {
    return dispatch => {
        try {
            dispatch({
                type: LOAD
            })
            const requesOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(activity)
            }
            return fetch(`${BASEURL}/activity`, requesOptions)
                .then(response => response.json())
                .then(json => {
                    if (json.status === 'ok') {
                        dispatch({
                            type: ADD_ACTIVITY,
                            payload: json.data,
                            error: null
                        });
                    } else {
                        dispatch({
                            type: ADD_ACTIVITY,
                            payload: null,
                            error: json.error
                        })
                    };
                })
        } catch (error) {
            dispatch({
                type: ADD_ACTIVITY,
                payload: null,
                error: error,
            })
        }
    }
};
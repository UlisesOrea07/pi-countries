import { GET_ACTIVITIES, ADD_ACTIVITY, LOAD, ERROR } from "./actionsTypes";
const BASEURL = 'http://localhost:3001';
export const getActivities = () => {
    return (dispatch) => {
        try {
            dispatch({
                type: LOAD
            })
            return fetch(`${BASEURL}/activities`)
                .then(response => response.json())
                .then(data => {
                    dispatch({
                        type: GET_ACTIVITIES,
                        payload: data
                    })
                })
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error,
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
                .then(data => {
                    dispatch({
                        type: ADD_ACTIVITY,
                        payload: data
                    })
                })
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error,
            })
        }
    }
};
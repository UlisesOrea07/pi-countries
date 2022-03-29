import { ADD_ACTIVITY, GET_ACTIVITIES } from "../actions/actionsTypes";

const initialState = {
    activitiesLoaded: [],
    activityAdded: null
};

export const activiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ACTIVITIES:
            return {
                ...state,
                activitiesLoaded: action.payload
            }
        case ADD_ACTIVITY:
            return {
                ...state,
                activityAdded: action.payload
            }

        default: return state;
    }
};

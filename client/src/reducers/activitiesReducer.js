import { ADD_ACTIVITY, GET_ACTIVITIES } from "../actions/actionsTypes";

const initialState = {
    activitiesLoaded: [],
    activityAdded: null,
    load: false
};

export const activiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ACTIVITIES:
            return {
                ...state,
                activitiesLoaded: action.payload,
                load: false,
                error: null
            }
        case ADD_ACTIVITY:
            return {
                ...state,
                activityAdded: action.payload,
                load: false,
                error: null
            }

        default: return state;
    }
};

import { ADD_ACTIVITY, ERROR, GET_ACTIVITIES, LOAD } from "../actions/actionsTypes";

const initialState = {
    activitiesLoaded: [],
    activityAdded: {},
    busy: false,
    error: null
};

const activiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ACTIVITIES:
            return {
                ...state,
                activitiesLoaded: action.payload,
                busy: false,
                error: null
            }
        case ADD_ACTIVITY:
            return {
                ...state,
                activityAdded: action.payload,
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

export default activiesReducer;
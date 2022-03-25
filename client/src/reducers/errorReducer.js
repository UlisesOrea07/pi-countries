import { HIDE_ERROR } from "../actions/actionsTypes";

const initialState = {
    error: null,
    isOpen: false
};

export const errorReducer = (state = initialState, action) => {
    const { error } = action;

    if (error) {
        return {
            error: error,
            isOpen: true
        }
    } else if (action.type === HIDE_ERROR) {
        return {
            error: null,
            isOpen: false
        }
    }
    return state;
};
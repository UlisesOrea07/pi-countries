import { combineReducers } from 'redux';
import { countriesReducer } from './countriesReducer';
import { activiesReducer } from './activitiesReducer';
import { errorReducer } from './errorReducer';

export const rootReducers = combineReducers({
    countries: countriesReducer,
    activities: activiesReducer,
    error: errorReducer
});

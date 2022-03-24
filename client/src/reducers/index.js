import { combineReducers } from 'redux';
import { countriesReducer } from './countriesReducer';
import { activiesReducer } from './activitiesReducer';

export const rootReducers = combineReducers({
    countries: countriesReducer,
    activities: activiesReducer
});

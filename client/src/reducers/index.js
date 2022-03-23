import { combineReducers } from 'redux';
import countriesReducer from './countriesReducer';
import activiesReducer from './activitiesReducer';

export default combineReducers({
    countriesReducer,
    activiesReducer
});
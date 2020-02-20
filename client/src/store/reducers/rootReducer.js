import { combineReducers } from "redux";
import citiesReducer from "./cityReducer";
import itineraryReducer from './itineraryReducer';
import activityReducer from './activityReducer';
import registerReducer from './registerReducer';

const rootReducer = combineReducers({
    cities: citiesReducer,
    itineraries: itineraryReducer,
    activities: activityReducer,
    register: registerReducer
});

export default rootReducer;
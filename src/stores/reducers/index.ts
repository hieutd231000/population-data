import { combineReducers } from '@reduxjs/toolkit';
import { citiesReducer } from '@stores/slices/cities';

const rootReducer = combineReducers({
  cities: citiesReducer,
});

export default rootReducer;

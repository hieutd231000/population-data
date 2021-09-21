import { getCities, GetCityParams, getOldCities, GetOldCityParams, getPopulationEstimate } from '@api';
import { Dispatch } from '@reduxjs/toolkit';
import { citiesActions } from '../slices/cities';

export const handleGetCities = (params: GetCityParams) => async (dispatch: Dispatch) => {
  try {
    dispatch(citiesActions.getCitiesRequest());
    const { data } = await getCities(params);
    dispatch(citiesActions.getCitiesSuccess(data));
  } catch (error) {
    dispatch(citiesActions.getCitiesFailed(error.message));
  }
};

export const handleGetOldCities = (params: GetOldCityParams) => async (dispatch: Dispatch) => {
  try {
    dispatch(citiesActions.getOldCitiesRequest());
    const { data } = await getOldCities(params);
    dispatch(citiesActions.getOldCitiesSuccess(data));
  } catch (error) {
    dispatch(citiesActions.getOldCitiesFailed(error.message));
  }
};

export const handleGetPopulationEstimate = (params: GetOldCityParams) => async (dispatch: Dispatch) => {
  try {
    dispatch(citiesActions.getPopulationEstimateRequest());
    const { data } = await getPopulationEstimate(params);
    dispatch(citiesActions.getPopulationEstimateSuccess(data));
  } catch (error) {
    dispatch(citiesActions.getPopulationEstimateFailed(error.message));
  }
};

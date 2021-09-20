import { ApiResponse, GetCityParams } from '@api';
import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ResponseDataStatus } from '@stores/shared';

export interface CityItem {
  prefCode: number;
  cityCode: string;
  cityName: string;
  bigCityFlag: string;
}

interface CitiesState {
  cities: ResponseDataStatus<CityItem>;
}

const initialState: CitiesState = {
  cities: {
    fetching: false,
    data: [],
  },
};

const getCitiesRequest: CaseReducer<CitiesState, PayloadAction<GetCityParams>> = (state) => {
  state.cities.fetching = true;
};

const getCitiesSuccess: CaseReducer<CitiesState, PayloadAction<ApiResponse<CityItem>>> = (state, { payload }) => {
  state.cities.fetching = false;
  state.cities.data = payload.result;
};

const getCitiesFailed: CaseReducer<CitiesState, PayloadAction<string>> = (state, { payload }) => {
  state.cities.fetching = false;
  state.cities.error = payload;
};

const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    getCitiesRequest,
    getCitiesSuccess,
    getCitiesFailed,
  },
});

export const citiesReducer = citiesSlice.reducer;

export const citiesActions = citiesSlice.actions;

export const caseReducers = citiesSlice.caseReducers;

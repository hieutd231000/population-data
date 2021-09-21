import { ApiDetailResponse, ApiResponse } from '@api';
import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ResponseDataDetailStatus, ResponseDataStatus } from '@stores/shared';

interface PopulationEstimateDataItem {
  label: string;
  data: { year: number; value: number }[];
}
export interface PopulationEstimateItem {
  boundaryYear?: number;
  data: PopulationEstimateDataItem[];
}
export interface OldCityItem {
  prefCode: number;
  cityCode: string;
  cityName: string;
  bigCityFlag: string;
  oldCityCode: string;
  oldCityName: string;
}

export interface CityItem {
  prefCode: number;
  cityCode: string;
  cityName: string;
  bigCityFlag: string;
}

export interface PrefecturesItem {
  prefCode: number;
  prefName: number;
}

interface CitiesState {
  cities: ResponseDataStatus<CityItem>;
  prefectures: ResponseDataStatus<PrefecturesItem>;
  oldCities: ResponseDataStatus<OldCityItem>;
  populationEstimate: ResponseDataDetailStatus<PopulationEstimateItem>;
}

const initialState: CitiesState = {
  cities: {
    fetching: false,
    data: [],
  },
  prefectures: {
    fetching: false,
    data: [],
  },
  oldCities: {
    fetching: false,
    data: [],
  },
  populationEstimate: {
    fetching: false,
  },
};

const getCitiesRequest: CaseReducer<CitiesState> = (state) => {
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

const getOldCitiesRequest: CaseReducer<CitiesState> = (state) => {
  state.oldCities.fetching = true;
};

const getOldCitiesSuccess: CaseReducer<CitiesState, PayloadAction<ApiResponse<OldCityItem>>> = (state, { payload }) => {
  state.oldCities.fetching = false;
  state.oldCities.data = payload.result;
};

const getOldCitiesFailed: CaseReducer<CitiesState, PayloadAction<string>> = (state, { payload }) => {
  state.oldCities.fetching = false;
  state.oldCities.error = payload;
};

const getPopulationEstimateRequest: CaseReducer<CitiesState> = (state) => {
  state.populationEstimate.fetching = true;
};

const getPopulationEstimateSuccess: CaseReducer<CitiesState, PayloadAction<ApiDetailResponse<PopulationEstimateItem>>> = (state, { payload }) => {
  state.populationEstimate.fetching = false;
  state.populationEstimate.data = payload.result;
};

const getPopulationEstimateFailed: CaseReducer<CitiesState, PayloadAction<string>> = (state, { payload }) => {
  state.populationEstimate.fetching = false;
  state.populationEstimate.error = payload;
};

const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    getCitiesRequest,
    getCitiesSuccess,
    getCitiesFailed,

    getOldCitiesRequest,
    getOldCitiesSuccess,
    getOldCitiesFailed,

    getPopulationEstimateRequest,
    getPopulationEstimateSuccess,
    getPopulationEstimateFailed,
  },
});

export const citiesReducer = citiesSlice.reducer;

export const citiesActions = citiesSlice.actions;

export const caseReducers = citiesSlice.caseReducers;

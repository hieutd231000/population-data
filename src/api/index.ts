import ConnectionInstance from './connectionInstance';
import { CityItem, OldCityItem, PopulationEstimateItem } from '@stores/slices/cities';
import { AxiosResponse } from 'axios';

export interface GetCityParams {
  prefCode: number;
}

export interface GetOldCityParams {
  prefCode: number;
  cityCode: string;
}

export interface ApiDetailResponse<T> {
  result: T;
  message: string | null;
}

export interface ApiResponse<T> {
  result: T[];
  message: string | null;
}

export const getPrefectures = (): Promise<AxiosResponse<ApiResponse<CityItem>>> => ConnectionInstance.get('/prefectures');

export const getCities = (params: GetCityParams): Promise<AxiosResponse<ApiResponse<CityItem>>> => ConnectionInstance.get('/cities', { params });

export const getOldCities = (params: GetCityParams): Promise<AxiosResponse<ApiResponse<OldCityItem>>> => ConnectionInstance.get('/oldCities', { params });

export const getPopulationEstimate = (params: GetCityParams): Promise<AxiosResponse<ApiResponse<PopulationEstimateItem>>> => ConnectionInstance.get('/population/sum/estimate', { params });

export enum RequestStatus {
  Idle = 'idle',
  Loading = 'loading',
  Success = 'success',
  Failed = 'failed',
}

export interface ResponseState {
  fetching?: boolean;
  status?: RequestStatus;
  error?: string;
  fetchingMore?: boolean;
}

export interface ResponseDataStatus<T> extends ResponseState {
  data: T[];
}

export interface ResponseDataDetailStatus<T> extends ResponseState {
  data?: T;
}

import { Competition } from 'src/models';

export enum CompetitionTypes {
  FETCH_COMPETITONS_REQUEST = 'FETCH_COMPETITONS_REQUEST',
  FETCH_COMPETITONS_SUCCESS = 'FETCH_COMPETITONS_SUCCESS',
  FETCH_COMPETITONS_ERROR = 'FETCH_COMPETITONS_ERROR',
  GET_COMPETITIONS_REQUEST = 'GET_COMPETITIONS_REQUEST',
  GET_COMPETITIONS_SUCCESS = 'GET_COMPETITIONS_SUCCESS',
  GET_COMPETITIONS_ERROR = 'GET_COMPETITIONS_ERROR',
  UPDATE_COMPETITION_REQUEST = 'UPDATE_COMPETITION_REQUEST',
  UPDATE_COMPETITION_SUCESS = 'UPDATE_COMPETITION_SUCCESS',
  UPDATE_COMPETITION_ERROR = 'UPDATE_COMPETITION_ERROR',
}

export type Maybe<T> = T | undefined | null;

export interface CompetitionState {
  competitions: Competition[];
  storedCompetitons: Competition[];
  error: Maybe<string>;
  loading: boolean;
}

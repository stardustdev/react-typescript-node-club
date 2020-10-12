import { Team } from 'src/models';
import { TeamTypes } from './types';

export const getTeams = (payload: string) => ({
  type: TeamTypes.TEAM_REQUEST,
  payload,
});

export const getTeamsSuccess = (payload: Team[]) => ({
  type: TeamTypes.TEAM_REQUEST_SUCCESS,
  payload,
});

export const getTeamsError = (payload: string) => ({
  type: TeamTypes.TEAM_REQUEST_ERROR,
  payload,
});

export type TeamActions =
  | ReturnType<typeof getTeams>
  | ReturnType<typeof getTeamsSuccess>
  | ReturnType<typeof getTeamsError>;

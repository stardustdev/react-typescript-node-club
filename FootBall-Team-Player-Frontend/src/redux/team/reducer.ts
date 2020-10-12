import { Team } from 'src/models';
import { TeamActions as ActionType } from './actions';
import { TeamTypes, TeamState } from './types';

export const initialState: TeamState = {
  teams: [],
  error: '',
};

const reducer = (state = initialState, action: ActionType): TeamState => {
  const { type, payload } = action;

  switch (type) {
    case TeamTypes.TEAM_REQUEST_SUCCESS:
      return {
        ...state,
        teams: [...(payload as Team[])],
      };
    case TeamTypes.TEAM_REQUEST_ERROR:
      return {
        ...state,
        error: payload as string,
      };
    default:
      return state;
  }
};

export default reducer;

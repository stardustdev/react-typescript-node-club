import { all, fork } from 'redux-saga/effects';

import authSagas from './auth/sagas';
import competitionSagas from './competition/sagas';
import teamSagas from './team/sagas';

export default function* rootSaga() {
  yield all([fork(authSagas), fork(competitionSagas), fork(teamSagas)]);
}

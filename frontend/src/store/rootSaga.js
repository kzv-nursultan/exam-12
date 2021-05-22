import {all} from 'redux-saga/effects';
import history from "../history";
import historySagas from "./sagas/historySaga";
import usersSagas from "./sagas/userSaga";
import picturesSaga from "./sagas/picturesSaga";

export default function* rootSaga() {
  yield all([
    ...historySagas(history),
    ...usersSagas,
    ...picturesSaga,
  ])
};
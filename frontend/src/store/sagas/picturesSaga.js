import {put, takeEvery} from 'redux-saga/effects';
import {NotificationManager} from 'react-notifications';
import picturesSlice from "../slices/picturesSlice";
import axiosApi from "../../axiosApi";

export const {
  getRequest,
  getSuccess,
  getError,
} = picturesSlice.actions;

export function* getAllPictures() {
  try {
    const response = yield axiosApi.get('/pictures');
    yield put(getSuccess(response.data));
  } catch (e) {
    yield put(getError(e.response.data));
    NotificationManager.error('Could not get data');
  }
}

const picturesSaga = [
  takeEvery(getRequest, getAllPictures),
];

export default picturesSaga;
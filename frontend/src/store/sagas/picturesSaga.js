import {put, takeEvery} from 'redux-saga/effects';
import {NotificationManager} from 'react-notifications';
import picturesSlice from "../slices/picturesSlice";
import axiosApi from "../../axiosApi";
import {historyPush} from "./historySaga";

export const {
  getRequest,
  getSuccess,
  getError,
  getAuthorsRequest,
  getAuthorsSuccess,
  getAuthorsFailure,
  postRequest,
  postSuccess,
  postFailure,
} = picturesSlice.actions;

export function* getAllPictures() {
  try {
    const response = yield axiosApi.get('/pictures');
    yield put(getSuccess(response.data));
  } catch (e) {
    yield put(getError(e.response.data));
    NotificationManager.error('Could not get data');
  }
};

export function* getAuthorsPictures({payload: id}) {
  try {
    const response = yield axiosApi.get('/pictures/' + id);
    yield put(getAuthorsSuccess(response.data));
  } catch (e) {
    yield put(getAuthorsFailure(e.response.data));
    NotificationManager.error('Could not load data.')
  }
}

export function* postPicture ({payload: body}) {
  try {
    const response = yield axiosApi.post('/pictures', body);
    yield put(postSuccess(response.data));
    yield put(historyPush('/'));
    NotificationManager.success('Posted successfully');
  } catch (e) {
    yield put(postFailure(e.response.data));
    NotificationManager.error('Could not sent');
  }
}


const picturesSaga = [
  takeEvery(getRequest, getAllPictures),
  takeEvery(getAuthorsRequest, getAuthorsPictures),
  takeEvery(postRequest, postPicture),
];

export default picturesSaga;
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  pictures: [],
  getError: null,
  authorsFailure: null,
  postError: null,
  deleteError: null,
};

const name = 'pictures';

const pictureSlice = createSlice({
  name,
  initialState,
  reducers: {
    getRequest: state => {
      state.loading = true;
    },
    getSuccess: (state, {payload: pictures}) => {
      state.pictures = pictures;
      state.loading = false;
    },
    getError: (state, {payload: error}) => {
      state.getError = error;
      state.loading = false;
    },
    getAuthorsRequest: state => {
      state.loading = true;
    },
    getAuthorsSuccess: (state, {payload: data}) => {
      state.pictures = data;
      state.loading = false;
    },
    getAuthorsFailure: (state, {payload: error}) => {
      state.authorsFailure = error;
      state.loading = false;
    },
    postRequest: state => {
      state.loading = true;
    },
    postSuccess: (state, {payload: pictures} )=> {
      state.pictures = pictures;
      state.loading = false;
    },
    postFailure: (state, {payload: error}) => {
      state.postError = error;
      state.loading = false;
    },
    deleteRequest: state => {
      state.loading = true;
    },
    deleteSuccess: (state, {payload: id}) => {
      state.pictures = state.pictures.filter(obj => obj._id !== id);
      state.loading = false;
    },
    deleteFailure: (state, {payload: error}) => {
      state.deleteError = error;
      state.loading = false;
    }
  }
});

export default pictureSlice;
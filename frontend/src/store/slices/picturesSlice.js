import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  pictures: [],
  getError: [],
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
      state.loading = false;
      state.getError = error;
    }
  }
});

export default pictureSlice;
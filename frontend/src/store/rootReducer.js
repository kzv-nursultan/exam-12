import {combineReducers} from "redux";
import usersSlice from "./slices/userSlices";
import picturesSlice from "./slices/picturesSlice";

const rootReducer = combineReducers({
  users: usersSlice.reducer,
  pictures: picturesSlice.reducer,
});

export default rootReducer;
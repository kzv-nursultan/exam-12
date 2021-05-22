import {combineReducers} from "redux";
import usersSlice from "./slices/userSlices";

const rootReducer = combineReducers({
  users: usersSlice.reducer,
});

export default rootReducer;
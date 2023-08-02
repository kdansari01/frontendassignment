import { combineReducers } from "redux";
import { getUserReducer } from "./Auth.reducer";

export const reducers = combineReducers({
  user: getUserReducer,
});

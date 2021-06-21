import { combineReducers } from "redux";
import financeReducer from "../reducers/financeReducer";

const rootReducer = combineReducers({
  finance: financeReducer,
});
export default rootReducer;

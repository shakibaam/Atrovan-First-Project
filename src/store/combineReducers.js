import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import devices from "./HomeReducer";
import mapReducer from "./mapReducer";

export default combineReducers({
  login: loginReducer,
  devices: devices,
  locations : mapReducer
});

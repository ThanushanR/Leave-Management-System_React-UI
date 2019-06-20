import { combineReducers } from "redux";
import userroleReducer from "./userroleReducer";
import leaveHistoryReducer from "./leaveHistoryReducer";
import leaveRequestReducer from "./leaveRequestReducer";

export default combineReducers({
  userrole: userroleReducer,
  status: leaveHistoryReducer,
  leaveRequest: leaveRequestReducer
});

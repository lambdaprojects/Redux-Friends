import { combineReducers } from "redux";
import showFriendsReducer from "./showFriendsReducer";

export default combineReducers({
  friends: showFriendsReducer
});

import { combineReducers } from "redux";
import showFriendsReducer from "./showFriendsReducer";
import addFriendsReducer from "./addFriendsReducer";

export default combineReducers({
  friends: showFriendsReducer,
  newFriend: addFriendsReducer
});

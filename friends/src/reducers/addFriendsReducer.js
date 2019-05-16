import {
  ADD_FRIENDS_SUCCESS,
  ADD_FRIENDS_START,
  ADD_FRIENDS_FAILURE
} from "../actions";

const initialState = {
  newFriend: { name: "", age: 0, email: "" },
  error: "",
  isLoading: false
};

function showFriendsReducer(state = initialState, action) {
  console.log(":: IN ADD FRIENDS REDUCER ::");
  console.log(":: ADD FRIENDS REDUCER :: ACTION TYPE IS " + action.type);
  console.log(":: ADD FRIENDS REDUCER :: ACTION PAYLOAD IS " + action.payload);

  switch (action.type) {
    case ADD_FRIENDS_SUCCESS: {
      return {
        ...state,
        newFriend: action.payload,
        isLoading: false
      };
    }
    case ADD_FRIENDS_FAILURE: {
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    }
    case ADD_FRIENDS_START: {
      return {
        ...state,
        isLoading: true
      };
    }
    default: {
      return state;
    }
  }
}

export default showFriendsReducer;

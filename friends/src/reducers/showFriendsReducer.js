import {
  SHOW_FRIENDS_SUCCESS,
  SHOW_FRIENDS_START,
  SHOW_FRIENDS_FAILURE
} from "../actions";

const initialState = {
  friends: [],
  error: "",
  isLoading: false
};

function showFriendsReducer(state = initialState, action) {
  console.log(":: IN SHOW FRIENDS REDUCER ::");
  console.log("ACTION TYPE IS " + action.type);
  console.log("ACTION PAYLOAD IS " + action.payload);

  switch (action.type) {
    case SHOW_FRIENDS_SUCCESS: {
      return {
        ...state,
        friends: action.payload,
        isLoading: false
      };
    }
    case SHOW_FRIENDS_FAILURE: {
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    }
    case SHOW_FRIENDS_START: {
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

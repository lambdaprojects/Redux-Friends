import {
  SHOW_FRIENDS_SUCCESS,
  SHOW_FRIENDS_START,
  SHOW_FRIENDS_FAILURE
} from "../actions";
import {
  DEL_FRIENDS_SUCCESS,
  DEL_FRIENDS_START,
  DEL_FRIENDS_FAILURE
} from "../actions";
import {
  ADD_FRIENDS_SUCCESS,
  ADD_FRIENDS_START,
  ADD_FRIENDS_FAILURE
} from "../actions";

import { LOGIN_SUCCESS, LOGIN_ABSOLUTE_FAILURE, LOGIN_START } from "../actions";

const initialState = {
  friends: [],
  error: "",
  isLoading: false,
  isLogginIn: false
};

function friendsReducer(state = initialState, action) {
  console.log(":: IN FRIENDS REDUCER ::");
  console.log("ACTION TYPE IS " + action.type);
  console.log("ACTION PAYLOAD IS " + action.payload);

  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isLoggingIn: true,
        error: ""
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false
      };
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
    case DEL_FRIENDS_SUCCESS: {
      return {
        ...state,
        friends: action.payload,
        isLoading: false
      };
    }
    case DEL_FRIENDS_FAILURE: {
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    }
    case DEL_FRIENDS_START: {
      return {
        ...state,
        isLoading: true
      };
    }
    case ADD_FRIENDS_SUCCESS: {
      return {
        ...state,
        friends: action.payload,
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

export default friendsReducer;

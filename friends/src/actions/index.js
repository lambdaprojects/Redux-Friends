import axios from "axios";

export const SHOW_FRIENDS_START = "SHOW_FRIENDS_START";
export const SHOW_FRIENDS_SUCCESS = "SHOW_FRIENDS_SUCCESS";
export const SHOW_FRIENDS_FAILURE = "SHOW_FRIENDS_FAILURE";
export const ADD_FRIENDS_START = "ADD_FRIENDS_START";
export const ADD_FRIENDS_SUCCESS = "ADD_FRIENDS_SUCCESS";
export const ADD_FRIENDS_FAILURE = "ADD_FRIENDS_FAILURE";
export const DEL_FRIENDS_START = "DEL_FRIENDS_START";
export const DEL_FRIENDS_SUCCESS = "DEL_FRIENDS_SUCCESS";
export const DEL_FRIENDS_FAILURE = "DEL_FRIENDS_FAILURE";

export const getFriends = () => dispatch => {
  dispatch({ type: SHOW_FRIENDS_START });
  console.log(":: CALLING GET FRIENDS ::");
  axios
    .get("http://localhost:5000/api/friends/")
    .then(res => {
      console.log(res.data);
      dispatch({
        type: SHOW_FRIENDS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: SHOW_FRIENDS_FAILURE, payload: err });
    });
};

export const addFriends = friend => dispatch => {
  dispatch({ type: ADD_FRIENDS_START });
  console.log("::ADDING FRIENDS ::");
  axios
    .post("http://localhost:5000/api/friends/", friend)
    .then(res => {
      dispatch({ type: ADD_FRIENDS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ADD_FRIENDS_FAILURE, payload: err });
    });
};

export const delFriends = id => dispatch => {
  dispatch({ type: DEL_FRIENDS_START });
  console.log("::DELETING FRIENDS ::");
  axios
    .delete(`http://localhost:5000/api/friends/${id}`)
    .then(res => {
      dispatch({ type: DEL_FRIENDS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: DEL_FRIENDS_FAILURE, payload: err });
    });
};

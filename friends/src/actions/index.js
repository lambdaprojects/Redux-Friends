import axios from "axios";

export const SHOW_FRIENDS_START = "SHOW_FRIENDS_START";
export const SHOW_FRIENDS_SUCCESS = "SHOW_FRIENDS_SUCCESS";
export const SHOW_FRIENDS_FAILURE = "SHOW_FRIENDS_FAILURE";

export const getFriends = () => dispatch => {
  dispatch({ type: SHOW_FRIENDS_START });
  console.log(":: CALLING GET FRIENDS ::");
  axios
    .get("localhost:5000/api/friends/")
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

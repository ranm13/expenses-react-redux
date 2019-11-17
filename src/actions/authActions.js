import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

export const registerUser = (userData, history) => dispatch => {
  axios
    .post("http://localhost:4000/users/register", userData)
    .then(res => history.push("/"))
    .catch(err =>
      dispatch({
        type: ('GET_ERRORS'),
        payload: err.response.data
      })
    );
};

export const loginUser = userData => dispatch => {
  axios
    .post("http://localhost:4000/users/login", userData)
    .then(res => {
      // Set token to localStorage
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: ('GET_ERRORS'),
        payload: err.response.data
      })
    );
};

export const setCurrentUser = decoded => {
  return {
    type: ('SET_CURRENT_USER'),
    payload: decoded
  };
};


export const setUserLoading = () => {
  return {
    type: ('USER_LOADING')
  };
};

export const logoutUser = () => dispatch => {
  localStorage.removeItem("jwtToken");
  setAuthToken(false);
  dispatch(setCurrentUser({}));
};
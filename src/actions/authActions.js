import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/users/register", userData)
    .then(res => history.push("/"))
    .catch(err =>
      dispatch({
        type: "GET_ERRORS",
        payload: err.response.data
      })
    );
};

export const loginUser = userData => dispatch => {
  axios
    .post("/users/login", userData)
    .then(async res => {
      // Set token to localStorage
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      // Set current user

      dispatch(setCurrentUser(decoded));
      console.log(decoded.id);
      dispatch(loadBalance(decoded.id));
    })
    .catch(err =>
      dispatch({
        type: "GET_ERRORS",
        payload: err.response.data
      })
    );
};

export const setCurrentUser = decoded => {
  return {
    type: "SET_CURRENT_USER",
    payload: decoded
  };
};

export const setUserLoading = () => {
  return {
    type: "USER_LOADING"
  };
};

export const logoutUser = () => dispatch => {
  localStorage.removeItem("jwtToken");
  setAuthToken(false);
  dispatch(setCurrentUser({}));
};

export const loadBalance = userId => dispatch => {
  axios
    .get(`/transactions/balance/${userId}`)
    .then(res =>
      dispatch({
        type: "LOAD_BALANCE",
        payload: res.data.balance
      })
    )
    .catch(err => console.log(err));
};

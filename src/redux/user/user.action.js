import UserActionTypes from "./user.types";
import axios from "axios";
import config from "../../env-config";

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});

export const clearErrorInfo = () => ({
  type: UserActionTypes.CLEAR_ERROR_INFO
});

export const signUpStart = () => ({
  type: UserActionTypes.SIGN_UP_START
});

export const signUpSuccess = () => ({
  type: UserActionTypes.SIGN_UP_SUCCESS
});

export const signUpFailure = error => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: error
});

export const emailSignInStart = () => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START
});

export const signInSuccess = () => ({
  type: UserActionTypes.SIGN_IN_SUCCESS
});

export const signInFailure = error => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error
});

export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START
});

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS
});

export const signOutFailure = error => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error
});

export const getUserProfileStart = () => ({
  type: UserActionTypes.GET_USER_PROFILE_START
});

export const getUserProfileSuccess = () => ({
  type: UserActionTypes.GET_USER_PROFILE_SUCCESS
});

export const getUserProfileFailure = () => ({
  type: UserActionTypes.GET_USER_PROFILE_FAILURE
});

//async action creators

export const signUpStartAsync = (email, password, name) => {
  return async dispatch => {
    dispatch(signUpStart());
    try {
      const { data } = await axios.post(`${config.BASE_URL}/api/users`, {
        name,
        email,
        password,
        photoURL: `/profile-image.jpg`
      });
      dispatch(signUpSuccess());
      dispatch(emailSignInStartAsync(email, password));
    } catch (error) {
      dispatch(signUpFailure(error.response.data));
      return error;
    }
  };
};

export const emailSignInStartAsync = (email, password) => {
  return async dispatch => {
    dispatch(emailSignInStart());
    try {
      const { data } = await axios.post(`${config.BASE_URL}/api/users/token`, {
        email,
        password
      });
      localStorage.setItem("token", data.token);
      dispatch(setCurrentUser(data.user));
      dispatch(signInSuccess());
    } catch (error) {
      dispatch(signInFailure(error.response.data));
      return error;
    }
  };
};

export const getUserProfileStartAsync = () => {
  const token = localStorage.getItem("token");
  return async dispatch => {
    dispatch(getUserProfileStart());
    try {
      const { data: user = null } = await axios.get(
        `${config.BASE_URL}/api/users/me`,
        {
          headers: {
            Authorization: "Bearer " + token
          }
        }
      );
      if (user) {
        dispatch(setCurrentUser(user));
        dispatch(getUserProfileSuccess());
      }
    } catch (error) {
      if (error && error.response) {
        dispatch(getUserProfileFailure(error.response.data));
      } else {
        dispatch(getUserProfileFailure("fail to get user profile"));
      }
      return error;
    }
  };
};

export const signOutStartAsync = () => {
  return dispatch => {
    dispatch(signOutStart());
    dispatch(setCurrentUser(null));
    localStorage.removeItem("token");
    dispatch(signOutSuccess());
  };
};

import UserActionTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    case UserActionTypes.SIGN_UP_START:
      return {
        ...state,
        isLoading: true
      };
    case UserActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null
      };
    case UserActionTypes.EMAIL_SIGN_IN_START:
      return {
        ...state,
        isLoading: true
      };
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null
      };
    case UserActionTypes.SIGN_OUT_START:
      return {
        ...state,
        isLoading: true
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null
      };
    case UserActionTypes.GET_USER_PROFILE_START:
      return {
        ...state,
        isLoading: true
      };
    case UserActionTypes.GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null
      };
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
    case UserActionTypes.GET_USER_PROFILE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case UserActionTypes.CLEAR_ERROR_INFO:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
};

export default userReducer;

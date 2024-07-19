enum userActionTypes {
  SIGN_UP_START = "SIGN_UP_START",
  SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS",
  SIGN_UP_FAILURE = "SIGN_UP_FAILURE",
  SIGN_IN_START = "SIGN_IN_START",
  SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS",
  SIGN_IN_FAILURE = "SIGN_IN_FAILURE",
  SIGN_IN_WITH_GOOGLE_START = "SIGN_IN_WITH_GOOGLE_START",
  SIGN_OUT_START = "SIGN_OUT_START",
  SIGN_OUT_SUCCESS = "SIGN_OUT_SUCCESS",
  SIGN_OUT_FAILURE = "SIGN_OUT_FAILURE",
  USER_SIGN_OUT_START = "USER_SIGN_OUT_START",
  USER_SIGN_OUT_SUCCESS = "USER_SIGN_OUT_SUCCESS",
  USER_SIGN_OUT_FAILURE = "USER_SIGN_OUT_FAILURE",
  SIGN_OUT_WITH_ERROR = "SIGN_OUT_WITH_ERROR",
  SIGN_OUT_WITH_OAUTH_START = "SIGN_OUT_WITH_OAUTH_START",
  GENERATE_GUEST_START = "GENERATE_GUEST_START",
  GENERATE_GUEST_SUCCESS = "GENERATE_GUEST_SUCCESS",
  GENERATE_GUEST_FAILURE = "GENERATE_GUEST_FAILURE",
  CHECK_USER_SESSION = "CHECK_USER_SESSION",
  CLEAR_ERRORS = "CLEAR_ERRORS",
  REQUEST_USER_INFO_FOR_SIGN_IN_START = "REQUEST_USER_INFO_FOR_SIGN_IN_START",
  REQUEST_USER_INFO_FOR_SIGN_IN_SUCCESS = "REQUEST_USER_INFO_FOR_SIGN_IN_SUCCESS",
  REQUEST_USER_INFO_FOR_SIGN_IN_FAILURE = "REQUEST_USER_INFO_FOR_SIGN_IN_FAILURE",
};

export default userActionTypes;

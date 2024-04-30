import { authConstants } from "../constants/authConstants";
import { getToken } from "../../services/hooks";

const token = getToken();
const userData = JSON.parse(localStorage.getItem("user"));

export const authReducer = (
  state = {
    user: token && userData ? { token: token, userData: userData } : null,
    isAuthenticated: token ? true : false,
    loading: false,
  },
  action
) => {
  switch (action.type) {
    case authConstants.LOGIN_REQUEST: // ? Login request
    case authConstants.SIGNUP_REQUEST: // ? Signup request
    case authConstants.LOGOUT_REQUEST: // ? Logout request
    case authConstants.VERIFY_EMAIL_REQUEST: // ? Verify email request
    case authConstants.RESEND_TOKEN_REQUEST: // ? Resend token request
    case authConstants.RESET_PASSWORD_REQUEST: // ? Reset password request
    case authConstants.REQUEST_VERIFICATION_TOKEN_REQUEST: // ? Request verification token request
    case authConstants.REGISTER_WITH_REQUEST:
    case authConstants.LOGIN_WITH_REQUEST:
      // ? Fetch personal info request
      return {
        ...state,
        loading: true,
      };

    case authConstants.SIGNUP_SUCCESS: // ? Signup success
    case authConstants.REGISTER_WITH_SUCCESS: // ? Signup success
      return {
        ...state,
        loading: false,
      };

    case authConstants.LOGIN_SUCCESS: // ? Login success
    case authConstants.LOGIN_WITH_SUCCESS: // ? Signup success
    case authConstants.VERIFY_EMAIL_SUCCESS: // ? Verify email success
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: {
          token: action.payload.token,
          userData: action.payload.userData,
        },
      };

    case authConstants.RESEND_TOKEN_SUCCESS: // ? Resend token success
    case authConstants.REQUEST_VERIFICATION_TOKEN_SUCCESS: // ? Request verification token success
    case authConstants.RESET_PASSWORD_SUCCESS: // ? Reset password success
      return {
        ...state,
        loading: false,
      };

    case authConstants.LOGOUT_SUCCESS: // ? Logout success
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        user: null,
      };

    case authConstants.LOGIN_FAILURE: // ? Login failure
    case authConstants.SIGNUP_FAILURE: // ? Signup failure
    case authConstants.REGISTER_WITH_FAILURE: // ? Signup failure
    case authConstants.LOGIN_WITH_FAILURE: // ? Signup failure
    case authConstants.LOGOUT_FAILURE: // ? Logout failure
    case authConstants.VERIFY_EMAIL_FAILURE: // ? Verify email failure
    case authConstants.RESEND_TOKEN_FAILURE: // ? Resend token failure
    case authConstants.RESET_PASSWORD_FAILURE: // ? Reset password failure
    case authConstants.REQUEST_VERIFICATION_TOKEN_FAILURE: // ? Request verification token failure
    case authConstants.REFRESH_TOKEN_FAILURE: // ? Refresh token failure
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case authConstants.CLEAR_ERRORS: // ? clear errors
      return {
        ...state,
        error: null,
      };

    default: // ? defaaaalt case yk...!
      return state;
  }
};

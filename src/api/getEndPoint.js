import * as endpoint from "../constant/endpoint";

export default (type, params) => {
  switch (type) {
    //Auth
    case endpoint.LOGIN:
      return "/auth/login";
    case endpoint.FORGOT_PASSWORD:
      return "/auth/forgot-password";
    case endpoint.VERIFY_OTP_FOR_FORGOT_PASSWORD:
      return "/auth/forgot-password/otp-verify";
    case endpoint.CHANGE_PASSWORD:
      return "/auth/forgot-password/change-password";
    case endpoint.SIGNUP_OTP:
      return "/auth/register/otp";
    case endpoint.VERIFY_OTP_FOR_SIGNUP:
      return "/auth/register/otp-verify";
    case endpoint.REFRESH_TOKEN:
      return "/auth/refresh";
    // User
    case endpoint.SIGNUP:
      return "/user";
    case endpoint.USER_DETAILS:
      return "/user/me";
    case endpoint.UPDATE_PROFILE_PICTURE:
      return "/user/update-picture"
    case endpoint.DELETE_PROFILE_PICTURE:
      return "/user/delete-picture"
    default:
      return null;
  }
};

import * as endpoint from "../constant/endpoint";

export default (type, params) => {
  switch (type) {
    // User
    case endpoint.LOGOUT:
      return "/user/logout/";
    case endpoint.REFRESH_TOKEN:
      return "/user/refresh/";
    case endpoint.FORGOT_PASSWORD:
      return "/user/forgot-password/request-otp/";
    case endpoint.CHANGE_PASSWORD:
      return "/user/account/password/reset/";
    case endpoint.CONTACT:
      return "/student/list/contact/";
    // Student
    case endpoint.STUDENT_LOGIN:
      return "/student/login/";
    case endpoint.STUDENT_SIGNUP:
      return "/student/register/";
    case endpoint.STUDENT_DETAILS:
      return "/student/account/details/";
    case endpoint.STUDENT_UPDATE_PROFILE:
      return "/student/update/account/";
    case endpoint.STUDENT_UPDATE_PICTURE:
      return "/student/update/pic/";
    case endpoint.STUDENT_DELETE_PICTURE:
      return "/student/delete/pic/";
    case endpoint.STUDENT_FORM_LIST:
      return `/student/list/form/?page=${params}`;
    case endpoint.STUDENT_CREATE_FORM:
      return "/student/create/form/";
    case endpoint.STUDENT_DELETE_FORM:
      return `/student/delete/form/${params}/`;
    //Institute Personnel
    case endpoint.INSTITUTE_PERSONNEL_LOGIN:
      return "/maintenance/login/";
    case endpoint.INSTITUTE_PERSONNEL_SIGNUP:
      return "/maintenance/register/";
    //Maintenance
    case endpoint.MAINTENANCE_DETAILS:
      return "/maintenance/account/details/";
    case endpoint.MAINTENANCE_UPDATE_PICTURE:
      return "/maintenance/update/pic/";
    case endpoint.MAINTENANCE_DELETE_PICTURE:
      return "/maintenance/delete/pic/";
    case endpoint.MAINTENANCE_UPDATE_PROFILE:
      return "/maintenance/update/account/";
    case endpoint.MAINTENANCE_FORM_LIST:
      return "/maintenance/list/forms/";
    case endpoint.MAINTENANCE_STAGE:
      return `/maintenance/update/stage/${params}`;
    //Manager
    case endpoint.MANAGER_DETAILS:
      return "/management/account/details/";
    case endpoint.MANAGER_FORM_LIST:
      return "/management/list/forms/";
    case endpoint.STUDENT_LIST:
      return "/management/list/student/";
    case endpoint.MAINTENANCE_LIST:
      return "/management/list/maintenance/";
    // case endpoint.MANAGER_LIST:
    //   return "/management/list/management/";
    default:
      return null;
  }
};

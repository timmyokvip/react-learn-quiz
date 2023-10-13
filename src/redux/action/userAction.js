export const FETCH_USER_LOGIN_SUCCESS = "FETCH_USER_LOGIN_SUCCESS";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";

export const doLogin = (data) => {
  return {
    type: FETCH_USER_LOGIN_SUCCESS,
    payload: data,
  };
};

export const doLogout = () => {
  return {
    type: USER_LOGIN_SUCCESS,
  };
};

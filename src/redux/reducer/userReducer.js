import {
  FETCH_USER_LOGIN_SUCCESS,
  USER_LOGIN_SUCCESS,
} from "../action/userAction";

const INITIAL_STATE = {
  account: {
    access_token: "",
    refresh_token: "",
    username: "",
    image: "",
    role: "",
    email: "",
  },
  isAuthenticated: false,
};

// Use the initialState as a default value
const userReducer = (state = INITIAL_STATE, action) => {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    // Do something here based on the different types of actions
    case FETCH_USER_LOGIN_SUCCESS:
      return {
        ...state,
        account: {
          access_token: action?.payload?.DT?.access_token,
          refresh_token: action?.payload?.DT?.refresh_token,
          username: action?.payload?.DT?.username,
          image: action?.payload?.DT?.image,
          role: action?.payload?.DT?.role,
          email: action?.payload?.DT?.email,
        },

        isAuthenticated: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        account: {
          access_token: "",
          refresh_token: "",
          username: "",
          image: "",
          role: "",
          email: "",
        },
        isAuthenticated: false,
      };
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
};
export default userReducer;

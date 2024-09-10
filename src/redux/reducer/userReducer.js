import { LOGIN } from "../actions";

const initState = {
  access: {
    access_token: "",
    refresh_token: "",
    username: "",
    role: "",
    email: "",
    image: "",
  },

  isAuthenticate: false,
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        access: {
          access_token: action?.payload?.DT?.access_token,
          refresh_token: action?.payload?.DT?.refresh_token,
          username: action?.payload?.DT?.username,
          role: action?.payload?.DT?.role,
          email: action?.payload?.DT?.email,
          image: action?.payload?.DT?.image,
        },
        isAuthenticate: true,
      };
    default:
      return state;
  }
};

export default userReducer;

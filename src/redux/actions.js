export const LOGIN = "Login/doLogin";

export const doLogin = (data) => {
  return {
    type: LOGIN,
    payload: data,
  };
};

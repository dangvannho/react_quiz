import httpRequest from "~/utils/httpRequest";

const signUpUser = (email, username, password) => {
  return httpRequest.post("api/v1/register", {
    email,
    username,
    password,
  });
};

export default signUpUser;

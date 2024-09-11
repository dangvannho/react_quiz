import httpRequest from "~/utils/httpRequest";

const loginUser = (email, password) => {
  return httpRequest.post("api/v1/login", { email, password, delay: 1000 });
};

export default loginUser;

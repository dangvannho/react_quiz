import httpRequest from "~/utils/httpRequest";

const apiAllUserService = () => {
  return httpRequest.get("api/v1/participant/all");
};

export default apiAllUserService;

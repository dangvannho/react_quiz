import httpRequest from "~/utils/httpRequest";

const allUserService = () => {
  return httpRequest.get("api/v1/participant/all");
};

export default allUserService;

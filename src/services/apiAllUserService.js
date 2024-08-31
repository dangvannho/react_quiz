import httpRequest from "~/utils/httpRequest";

const allUserService = () => {
  return httpRequest.get("api/v1/participant/all");
};

export const userWithPaginate = (page, limit) => {
  return httpRequest.get("api/v1/participant", {
    params: {
      page,
      limit,
    },
  });
};

export default allUserService;

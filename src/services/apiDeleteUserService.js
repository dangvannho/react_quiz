import httpRequest from "~/utils/httpRequest";

const deleteUser = (userId) => {
  return httpRequest.delete("api/v1/participant", { data: { id: userId } });
};

export default deleteUser;

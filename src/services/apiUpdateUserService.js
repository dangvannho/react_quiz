import httpRequest from "~/utils/httpRequest";

const updateUser = async (id, username, role, image) => {
  const dataUpdate = new FormData();
  dataUpdate.append("id", id);
  dataUpdate.append("username", username);
  dataUpdate.append("role", role);
  dataUpdate.append("userImage", image);
  return httpRequest.put("api/v1/participant", dataUpdate);
};

export default updateUser;

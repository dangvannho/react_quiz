import httpRequest from "~/utils/httpRequest";

const questionById = (quizId) => {
  return httpRequest.get("api/v1/questions-by-quiz", {
    params: {
      quizId,
    },
  });
};

export default questionById;

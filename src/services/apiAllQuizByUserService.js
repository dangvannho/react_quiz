import httpRequest from "~/utils/httpRequest";

const quizByUser = () => {
  return httpRequest.get("api/v1/quiz-by-participant");
};

export default quizByUser;

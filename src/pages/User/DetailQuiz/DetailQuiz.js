import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import _ from "lodash";
import questionById from "~/services/apiQuestionByIdService";
import "./DetailQuiz.scss";
import Question from "./Question";

function DetailQuiz() {
  const [dataQuiz, setDataQuiz] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const param = useParams();
  const location = useLocation();
  const quizId = param.id;

  useEffect(() => {
    fetchQuestionById();
  }, [quizId]);

  const fetchQuestionById = async () => {
    const data = await questionById(quizId);
    if (data.EC === 0) {
      let raw = data.DT;

      let dataFinal = _.chain(raw)
        // Group the elements of Array based on `color` property
        .groupBy("id")
        // `key` is group's name (color), `value` is the array of objects
        .map((value, key) => {
          let questionDescription = "";
          let image = null;
          let answers = [];

          value.forEach((item, index) => {
            if (index === 0) {
              questionDescription = item.description;
              image = item.image;
            }
            answers.push(item.answers);
          });
          return { questionId: key, questionDescription, image, answers };
        })
        .value();

      setDataQuiz(dataFinal);
    }
  };

  return (
    <div className="detail-quiz-container">
      <div className="left-content">
        <h2 className="quiz-title">
          Quiz {quizId}: {location?.state?.quizTitle}
        </h2>
        <div className="quiz-body">
          <Question
            data={dataQuiz.length > 0 ? dataQuiz[currentQuestion] : []}
          />
          <div className="q-footer">
            <button
              className="btn btn-secondary"
              disabled={currentQuestion === 0 ? true : false}
              onClick={() => setCurrentQuestion(currentQuestion - 1)}
            >
              Prev
            </button>
            <button
              className="btn btn-primary"
              disabled={currentQuestion >= dataQuiz.length - 1 ? true : false}
              onClick={() => setCurrentQuestion(currentQuestion + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>

      <div className="right-content"></div>
    </div>
  );
}

export default DetailQuiz;

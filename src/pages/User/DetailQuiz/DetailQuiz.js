import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import _ from "lodash";
import questionById from "~/services/apiQuestionByIdService";
import "./DetailQuiz.scss";

function DetailQuiz() {
  const param = useParams();
  const location = useLocation();
  console.log(location);

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

      console.log(dataFinal);
    }
  };

  return (
    <div className="detail-quiz-container">
      <div className="left-content">
        <h2 className="quiz-title">
          Quiz {quizId}: {location?.state?.quizTitle}
        </h2>
        <div className="quiz-body">
          <img src="" alt="" />
          <div className="q-content">
            <div className="question">
              <h4 className="question-desc">Question 1: Đây là ai?</h4>
              {/*    <img
                src="https://images.unsplash.com/photo-1721332149371-fa99da451baa?q=80&w=2536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="question-image"
              /> */}
              <div className="answers">
                <span>A. Là cô nào đấy...</span>
                <span>B. Là em nào đấy...</span>
                <span>C. Đếu care...</span>
              </div>
            </div>
          </div>
          <div className="q-footer">
            <button className="btn btn-secondary">Prev</button>
            <button className="btn btn-primary">Next</button>
          </div>
        </div>
      </div>

      <div className="right-content"></div>
    </div>
  );
}

export default DetailQuiz;

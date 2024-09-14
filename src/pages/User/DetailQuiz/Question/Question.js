import _ from "lodash";
import "../DetailQuiz.scss";

function Question({ data }) {
  if (_.isEmpty(data)) {
    return <></>;
  }
  return (
    <div className="q-content">
      <div className="question">
        <h4 className="question-desc">
          Question {data.questionId}: {data.questionDescription}?
        </h4>
        {data.image && (
          <img
            src={`data:image/png;base64, ${data.image}`}
            alt=""
            className="question-image"
          />
        )}
        <div className="answers">
          {data.answers.length > 0 &&
            data.answers.map((item, index) => {
              return (
                <div key={index} className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    {item.description}
                  </label>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Question;

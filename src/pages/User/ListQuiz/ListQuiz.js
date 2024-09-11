import { useEffect, useState } from "react";
import quizByUser from "~/services/apiAllQuizByUserService";
import "./ListQuiz.scss";

function ListQuiz() {
  const [listQuiz, setListQuiz] = useState([]);

  useEffect(() => {
    fectchListQuiz();
  }, []);

  const fectchListQuiz = async () => {
    const data = await quizByUser();
    if (data.EC === 0) {
      setListQuiz(data.DT);
    }
  };

  return (
    <div className="list-quiz-container">
      {listQuiz.map((item, index) => {
        return (
          <div key={index} className="card" style={{ width: "18rem" }}>
            <img
              src={`data:image/jpeg;base64, ${item.image}`}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Quiz {index + 1}</h5>
              <p className="card-text">{item.description}</p>
              <button className="btn btn-primary">Start now</button>
            </div>
          </div>
        );
      })}
      {listQuiz.length === 0 && <div>{"You don't have any quiz now..."}</div>}
    </div>
  );
}

export default ListQuiz;

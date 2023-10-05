import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getDataQuiz, postSubmitQuiz } from "../../services/apiService";
import _ from "lodash";
import Question from "./Question";
import ModalResult from "./ModalResult";

const DetailQuiz = (props) => {
  const params = useParams();
  const location = useLocation();
  const quizId = params.id;

  const [dataQuiz, setDataQuiz] = useState([]);
  const [index, setIndex] = useState(0);
  const [showModalResult, setShowModalResult] = useState(false);
  const [dataModalResult, setDataModalResult] = useState({});

  useEffect(() => {
    fetchQuestions();
  }, [quizId]);

  const fetchQuestions = async () => {
    let res = await getDataQuiz(quizId);
    if (res && res.EC === 0) {
      let raw = res.DT;
      let data = _.chain(raw)
        // Group the elements of Array based on `id` property
        .groupBy("id")
        // `key` is group's name (id), `value` is the array of objects
        .map((value, key) => {
          let answers = [];
          let questionDescription,
            image = null;
          value.forEach((item, index) => {
            if (index === 0) {
              questionDescription = item.description;
              image = item.image;
            }
            item.answers.isSelected = false;
            answers.push(item.answers);
          });

          return {
            questionId: key,
            answers,
            questionDescription,
            image,
          };
        })
        .value();
      setDataQuiz(data);
    }
  };

  const handlePrev = () => {
    if (index - 1 < 0) return;
    setIndex(index - 1);
  };

  const handleNext = () => {
    if (dataQuiz && dataQuiz.length > index + 1) setIndex(index + 1);
  };

  const handleCheckbox = (answerId, questionId) => {
    let dataQuizClone = _.cloneDeep(dataQuiz);
    let question = dataQuizClone.find(
      (item) => +item.questionId === +questionId
    );
    if (question && question.answers) {
      question.answers = question.answers.map((item) => {
        if (+item.id === +answerId) {
          item.isSelected = !item.isSelected;
        }
        return item;
      });
    }
    let index = dataQuizClone.findIndex(
      (item) => +item.questionId === +questionId
    );
    if (index > -1) {
      dataQuizClone[index] = question;
      setDataQuiz(dataQuizClone);
    }
  };

  const handleFinish = async () => {
    let payload = {
      quizId: +quizId,
      answers: [],
    };
    let answers = [];
    if (dataQuiz && dataQuiz.length > 0) {
      dataQuiz.forEach((question) => {
        let questionId = question.questionId;
        let userAnswerId = [];

        question.answers.forEach((ans) => {
          if (ans.isSelected) {
            userAnswerId.push(ans.id);
          }
        });

        answers.push({
          questionId: +questionId,
          userAnswerId: userAnswerId,
        });
      });
      payload.answers = answers;

      // submit api
      let res = await postSubmitQuiz(payload);

      if (res && res.EC === 0) {
        setDataModalResult({
          countCorrect: res.DT.countCorrect,
          countTotal: res.DT.countTotal,
          quizData: res.DT.quizData,
        });
        setShowModalResult(true);
      } else {
        alert("somthing wrong");
      }
    }
  };

  return (
    <div className="container d-flex mt-5 gap-3  ">
      <div className="border border-success col-8">
        <div className="title fw-bold fs-1">{location?.state?.quizTitle}</div>

        <div className="body">
          <img alt="" />
        </div>
        <div className="content container mt-3  ">
          <Question
            index={index}
            handleCheckbox={handleCheckbox}
            data={dataQuiz && dataQuiz.length > 0 ? dataQuiz[index] : []}
          ></Question>
        </div>
        <footer className="d-flex justify-content-center gap-3">
          <button className="btn btn-danger" onClick={() => handlePrev()}>
            Prev
          </button>
          <button className="btn btn-success" onClick={() => handleNext()}>
            Next
          </button>
          <button className="btn btn-warning" onClick={() => handleFinish()}>
            Finish
          </button>
        </footer>
      </div>

      <div className="border border-danger col-4">count down</div>
      <ModalResult
        show={showModalResult}
        setShow={setShowModalResult}
        dataModalResult={dataModalResult}
      />
    </div>
  );
};

export default DetailQuiz;

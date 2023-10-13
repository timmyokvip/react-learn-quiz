import React, { useRef } from "react";
import CountDown from "./CountDown";
import "./rightcontent.css";

const RightContent = (props) => {
  const refDiv = useRef([]);

  const { dataQuiz } = props;
  const onTimeUp = () => {
    props.handleFinish();
  };

  const getClassQuestion = (index, question) => {
    if (question && question.answers.length > 0) {
      let check = question.answers.find((a) => a.isSelected === true);
      if (check) {
        return "question selected";
      }
    }
    return "question";
  };

  const handleClickQuestion = (question, index) => {
    props.setIndex(index);
    if (refDiv.current) {
      refDiv.current.forEach((item) => {
        if (item && item.className === "question clicked") {
          item.className = "question ";
        }
      });
    }
    if (question && question.answers.length > 0) {
      let check = question.answers.find((a) => a.isSelected === true);
      if (check) {
        return;
      }
    }
    refDiv.current[index].className =
      "question clicked rounded-circle border px-3 py-2 btn";
  };

  return (
    <>
      <div className="text-center border-bottom fs-4">
        <CountDown onTimeUp={onTimeUp} />
      </div>
      <div className="main-question d-flex flex-wrap gap-3 p-2">
        {dataQuiz &&
          dataQuiz.length > 0 &&
          dataQuiz.map((item, index) => {
            return (
              <div
                className={`${getClassQuestion(
                  index,
                  item
                )} rounded-circle border px-3 py-2 btn`}
                key={`question-${index}`}
                onClick={() => handleClickQuestion(item, index)}
                ref={(element) => (refDiv.current[index] = element)}
              >
                {index + 1}
              </div>
            );
          })}
      </div>
    </>
  );
};

export default RightContent;

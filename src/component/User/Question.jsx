import React from "react";
import _ from "lodash";

const Question = (props) => {
  const { data, index } = props;
  if (_.isEmpty(data)) {
    return <></>;
  }

  const handleCheckbox = (event, answerId, questionId) => {
    props.handleCheckbox(answerId, questionId);
  };

  return (
    <>
      {data.image && (
        <div>
          <img
            src={`data:image/jpeg;base64,${data.image}`}
            className="w-25 h-50"
            alt="img"
          />
        </div>
      )}

      <div className="text-uppercase fw-bold">
        Question {index + 1}: {data.questionDescription}
      </div>
      <div className="answer">
        {data.answers &&
          data.answers.length &&
          data.answers.map((item, index) => {
            return (
              <div key={`answer-${index}`}>
                <div className="form-check ">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={item.isSelected}
                    onChange={(e) =>
                      handleCheckbox(e, item.id, data.questionId)
                    }
                  />
                  <label className="form-check-label">{item.description}</label>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Question;

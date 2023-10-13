import React, { useState } from "react";
import _ from "lodash";
import Lightbox from "react-awesome-lightbox";

const Question = (props) => {
  const { data, index } = props;
  const [isPreviewImage, setIsPreviewImage] = useState(false);
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
            onClick={() => setIsPreviewImage(true)}
            src={`data:image/jpeg;base64,${data.image}`}
            className="w-25 h-50"
            alt="img"
            style={{ cursor: "pointer" }}
          />

          {isPreviewImage === true && (
            <Lightbox
              image={`data:image/jpeg;base64,${data.image}`}
              title={"question img"}
              onClose={() => setIsPreviewImage(false)}
            />
          )}
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

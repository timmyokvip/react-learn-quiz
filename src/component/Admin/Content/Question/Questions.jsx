import React, { useState } from "react";
import Select from "react-select";
import { AiOutlinePlusCircle, AiFillMinusCircle } from "react-icons/ai";

const Questions = (props) => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const [selectedQuiz, setSelectedQuiz] = useState({});

  return (
    <div className="container">
      <div className="title">Manage question</div>
      <div className="add-new-question">
        <div className="col-6 form-group">
          <label htmlFor="">Select Quiz:</label>
          <Select
            value={selectedQuiz}
            onChange={setSelectedQuiz}
            options={options}
            className="form-control"
          />
        </div>
        <div className="mt-3">Add question:</div>
        <div className="row">
          <div className="form-floating mb-3 ">
            <input
              type="text"
              className="form-control"
              placeholder="name@example.com"
            />
            <label>mô tả</label>
          </div>
          <div className="col-3">
            <label className="me-5">Upload Image</label>
            <input type="file" hidden />
            <span>0 file is uploaded </span>
          </div>
          <div>
            <div className="col-3 d-flex gap-3">
              <button className="btn btn-primary d-flex align-items-center gap-2">
                <AiOutlinePlusCircle></AiOutlinePlusCircle>Add new
              </button>
              <button className="btn btn-primary d-flex align-items-center gap-2">
                <AiFillMinusCircle></AiFillMinusCircle>remove
              </button>
            </div>
            <div className="answer-content d-flex align-items-center gap-5 mt-5">
              <input className="form-check-input" type="checkbox" />
              <div className="form-floating mb-3 ">
                <input
                  type="text"
                  className="form-control"
                  placeholder="name@example.com"
                />
                <label>Answer 1</label>
              </div>
              <div className="col-3 d-flex gap-3">
                <button className="btn btn-danger d-flex align-items-center gap-2">
                  <AiOutlinePlusCircle></AiOutlinePlusCircle>
                </button>
                <button className="btn btn-success d-flex align-items-center gap-2">
                  <AiFillMinusCircle></AiFillMinusCircle>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { postSignUp } from "../../services/apiService";
import { toast } from "react-toastify";
import Language from "../Header/Language";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setshowPass] = useState(true);

  let navigate = useNavigate();

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSignUp = async () => {
    // validate
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      toast.error("invalid email");
      return;
    }
    if (!password) {
      toast("invalid password");
      return;
    }

    // submit api
    let data = await postSignUp(username, email, password);
    if (data && data.EC === 0) {
      toast.success(data.EM);
      navigate("/login");
    }
    if (data && +data.EC !== 0) {
      toast.error(data.EM);
    }
  };

  const handleCheck = () => {
    setshowPass(!showPass);
  };

  return (
    <div>
      <div className="container p-4 ">
        <div className="header d-flex justify-content-between">
          <span>U have account ???</span>
          <div className="d-flex align-items-center gap-3">
            <button
              className="btn btn-secondary"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
            <Language />
          </div>
        </div>

        <div className="welcome col-4 mx-auto">SIGNUP</div>

        <div className="content-form col-4 mx-auto mt-4">
          <div className="form-group">
            <label htmlFor="">User name</label>
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="">Email </label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="">Password </label>
            <input
              type={showPass ? "password" : "text"}
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <span onClick={() => handleCheck()}>
              {showPass ? (
                <AiFillEye size={30} />
              ) : (
                <AiFillEyeInvisible size={30} />
              )}
            </span>
          </div>

          <div>
            <button
              className="w-100 btn btn-dark my-5"
              onClick={() => handleSignUp()}
            >
              Sign Up
            </button>
          </div>
          <div>
            <span className="btn" onClick={() => navigate("/")}>
              Go to homepage
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

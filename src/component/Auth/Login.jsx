import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../services/apiService";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { doLogin } from "../../redux/action/userAction";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import "./login.css";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleLogin = async () => {
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
    setIsLoading(true);

    // submit api
    let data = await postLogin(email, password);
    if (data && data.EC === 0) {
      dispatch(doLogin(data));
      toast.success(data.EM);
      setIsLoading(false);
      navigate("/");
    }
    if (data && +data.EC !== 0) {
      toast.error(data.EM);
      setIsLoading(false);
    }
  };

  return (
    <div className="container p-4 ">
      <div className="header d-flex justify-content-between">
        <span>U dont have account ???</span>
        <button
          className="btn btn-secondary"
          onClick={() => navigate("/sign-up")}
        >
          Sign up
        </button>
      </div>

      <div className="welcome col-4 mx-auto">Hello, hi hihi</div>

      <div className="content-form col-4 mx-auto mt-4">
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
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <span>Forgot password ?</span>
        <div>
          <button
            className="w-100 btn btn-dark my-5"
            onClick={() => handleLogin()}
            disabled={isLoading}
          >
            {isLoading === true && (
              <AiOutlineLoading3Quarters className="loaderIcon" />
            )}
            Login{" "}
          </button>
        </div>
        <div>
          <span className="btn" onClick={() => navigate("/")}>
            Go to homepage
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import Admin from "./component/Admin/Admin";
import HomePage from "./component/Home/HomePage";
import ManageUser from "./component/Admin/Content/ManageUser";
import Dashboard from "./component/Admin/Content/DashBoard";
import Login from "./component/Auth/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUp from "./component/Auth/SignUp";
import ListQuiz from "./component/User/ListQuiz";
import DetailQuiz from "./component/User/DetailQuiz";
import ManageQuiz from "./component/Admin/Content/Quiz/ManageQuiz";
import Questions from "./component/Admin/Content/Question/Questions";
import PrivateRoute from "./routes/PrivateRoute";

const NotFound = () => {
  return (
    <div className="container mt-3 alert alert-danger">404. Not found</div>
  );
};

const Layout = (props) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />}></Route>
          <Route
            path="/user"
            element={
              <PrivateRoute>
                <ListQuiz />
              </PrivateRoute>
            }
          ></Route>
        </Route>
        <Route path="/quiz/:id" element={<DetailQuiz />}></Route>
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        >
          <Route index element={<Dashboard />}></Route>
          <Route path="manage-user" element={<ManageUser />}></Route>
          <Route path="manage-quiz" element={<ManageQuiz />}></Route>
          <Route path="manage-questions" element={<Questions />}></Route>
        </Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default Layout;

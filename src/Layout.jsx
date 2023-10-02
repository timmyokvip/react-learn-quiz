import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import User from "./component/User/User";
import Admin from "./component/Admin/Admin";
import HomePage from "./component/Home/HomePage";
import ManageUser from "./component/Admin/Content/ManageUser";
import Dashboard from "./component/Admin/Content/DashBoard";
import Login from "./component/Auth/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUp from "./component/Auth/SignUp";

const Layout = (props) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/user" element={<User />}></Route>
        </Route>
        <Route path="/admin" element={<Admin />}>
          <Route index element={<Dashboard />}></Route>
          <Route path="manage-user" element={<ManageUser />}></Route>
        </Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
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

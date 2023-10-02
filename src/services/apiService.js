import axios from "../utils/axiosCustomize";

const postCreteNewUser = (email, password, username, role, image) => {
  // submit data
  const data = new FormData();
  data.append("email", email);
  data.append("password", password);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", image);

  return axios.post("api/v1/participant", data);
};

const getAllUsers = () => {
  return axios.get("api/v1/participant/all");
};

const getViewUser = () => {
  return axios.get("api/v1/participant");
};

const putUpdateUser = (id, username, role, image) => {
  // submit data
  const data = new FormData();

  data.append("id", id);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", image);

  return axios.put("api/v1/participant", data);
};

const deleteUser = (userId) => {
  return axios.delete("api/v1/participant", {
    data: { id: userId },
  });
};

const getUserWithPage = (page, limit) => {
  return axios.get(`api/v1/participant?page=${page}&limit=${limit}`);
};

const postLogin = (userEmail, userPassword) => {
  return axios.post(`/api/v1/login`, {
    email: userEmail,
    password: userPassword,
  });
};

const postSignUp = (username, email, password) => {
  return axios.post("/api/v1/register", {
    username,
    email,
    password,
  });
};

export {
  postCreteNewUser,
  getAllUsers,
  putUpdateUser,
  getViewUser,
  deleteUser,
  getUserWithPage,
  postLogin,
  postSignUp,
};

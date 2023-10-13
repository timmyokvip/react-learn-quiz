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
    delay: 3000,
  });
};

const postSignUp = (username, email, password) => {
  return axios.post("/api/v1/register", {
    username,
    email,
    password,
  });
};

const getQuizByUser = () => {
  return axios.get("/api/v1/quiz-by-participant");
};

const getDataQuiz = (id) => {
  return axios.get(`/api/v1/questions-by-quiz?quizId=${id}`);
};

const postSubmitQuiz = (data) => {
  return axios.post(`/api/v1/quiz-submit`, { ...data });
};

const postCreateNewQuiz = (description, name, difficulty, quizImage) => {
  const data = new FormData();
  data.append("description", description);
  data.append("name", name);
  data.append("difficulty", difficulty);
  data.append("quizImage", quizImage);
  return axios.post("/api/v1/quiz", data);
};

const getAllQuizForAdmin = () => {
  return axios.get(`/api/v1/quiz/all`);
};

const postCreateNewQuestionForQuiz = (quiz_id, description, image) => {
  const data = new FormData();
  data.append("quiz_id", quiz_id);
  data.append("description", description);
  data.append("questionImage", image);
  return axios.post("api/v1/question", data);
};

const postCreateNewAnswerForQuestion = (
  description,
  correct_answer,
  question_id
) => {
  return axios.post("api/v1/question", {
    description,
    correct_answer,
    question_id,
  });
};

const postAssignQuiz = (quizId, userId) => {
  return axios.post("api/v1/quiz-assign-to-user", {
    quizId,
    userId,
  });
};

const getQuizWithQA = (quizId) => {
  return axios.get(`/api/v1/quiz-with-qa/${quizId}`);
};

const postUpsertQA = (data) => {
  return axios.post(`/api/v1/quiz-upsert-qa`, { ...data });
};

const logout = (email, refresh_token) => {
  return axios.post(`/api/v1/logout`, { email, refresh_token });
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
  getQuizByUser,
  getDataQuiz,
  postSubmitQuiz,
  postCreateNewQuiz,
  getAllQuizForAdmin,
  postCreateNewQuestionForQuiz,
  postCreateNewAnswerForQuestion,
  postAssignQuiz,
  getQuizWithQA,
  postUpsertQA,
  logout,
};

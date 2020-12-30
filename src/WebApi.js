const BASE_URL = "http://localhost:3001/v1";
const getAuthToken = () => localStorage.getItem("token");

export const registerAPI = (email, password, confirm, nickname) => {
  return fetch(`${BASE_URL}/user`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      email,
      password,
      confirm,
      nickname,
    }),
  })
    .then((res) => res.json())
    .catch((error) => console.log(error));
};

export const loginAPI = (email, password) => {
  return fetch(`${BASE_URL}/login`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then((res) => res.json())
    .catch((error) => console.log(error));
};

export const getMeAPI = () => {
  const token = localStorage.getItem("token");
  return fetch(`${BASE_URL}/me`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .catch((error) => console.log(error));
};

export const updateUserInfoAPI = (id, email, nickname, authTypeId) => {
  const token = localStorage.getItem("token");
  return fetch(`${BASE_URL}/user/${id}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    method: "PATCH",
    body: JSON.stringify({
      email,
      nickname,
      authTypeId,
    }),
  });
};

export const updateUserPasswordAPI = (id, password) => {
  const token = localStorage.getItem("token");
  fetch(`${BASE_URL}/user/${id}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    method: "PATCH",
    body: JSON.stringify({
      password,
    }),
  });
};

//  getCourseList
export const getCourseListAPI = () => {
  return fetch(`${BASE_URL}/courses`, {
    headers: {
      Authorization: `Bearer ${getAuthToken()}`,
    },
  }).then((res) => res.json());
};
//  getCourse
export const getCourseAPI = (id) =>
  fetch(`${BASE_URL}/courses/${id}`, {
    headers: {
      Authorization: `Bearer ${getAuthToken()}`,
    },
  }).then((res) => res.json());

//  addCourse
export const addCourseAPI = (data) => {
  return fetch(`${BASE_URL}/courses`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getAuthToken()}`,
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
};

//  deleteCourse
export const deleteCourseAPI = (id) => {
  // 權限驗證
  return fetch(`${BASE_URL}/courses/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${getAuthToken()}`,
    },
  }).then((res) => res.json());
};

//  updateCourse
export const updateCourseAPI = (id, data) => {
  return fetch(`${BASE_URL}/courses/${id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${getAuthToken()}`,
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
};

//  cart
export const getCartListAPI = () => {
  return fetch(`${BASE_URL}/cartList`, {
    headers: {
      Authorization: `Bearer ${getAuthToken()}`,
    },
  }).then((res) => res.json());
};
export const addCartItemAPI = (id) => {
  return fetch(`${BASE_URL}/cart-item/${id}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getAuthToken()}`,
    },
  }).then((res) => res.json());
};
export const deleteCartItemAPI = (id) => {
  return fetch(`${BASE_URL}/cart-item/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${getAuthToken()}`,
    },
  }).then((res) => res.json());
};

//  getTeacherList
export const getTeacherListAPI = () =>
  fetch(`${BASE_URL}/teachers`, {
    headers: {
      Authorization: `Bearer ${getAuthToken()}`,
    },
  }).then((res) => res.json());
//  getTeacher
export const getTeacherAPI = (id) =>
  fetch(`${BASE_URL}/teachers/${id}`, {
    headers: {
      Authorization: `Bearer ${getAuthToken()}`,
    },
  }).then((res) => res.json());

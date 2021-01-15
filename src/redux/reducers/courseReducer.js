/* eslint-disable no-param-reassign */
/* eslint-disable import/no-unresolved */
import { createSlice } from "@reduxjs/toolkit";
import {
  getCourseListAPI,
  getCourseAPI,
  addCourseAPI,
  addUnitListAPI,
  updateCourseAPI,
  getMyCourseListAPI,
} from "../../webAPI/courseAPI";

export const courseSlice = createSlice({
  name: "course",
  initialState: {
    courseList: [],
    isGettingCourseList: false,
    getCourseListError: null,
    course: null,
    isGettingCourse: false,
    getCourseError: null,
    myCourseList: null,
    isGettingMyCourseList: false,
    getMyCourseListError: null,
  },
  reducers: {
    setCourseList: (state, action) => {
      state.courseList = action.payload;
      state.getCourseListError = null;
    },
    setIsGettingCourseList: (state, action) => {
      state.isGettingCourseList = action.payload;
    },
    setGetCourseListError: (state, action) => {
      state.getCourseListError = action.payload;
    },
    setCourse: (state, action) => {
      state.course = action.payload;
      state.getCourseError = null;
    },
    setIsGettingCourse: (state, action) => {
      state.isGettingCourse = action.payload;
    },
    setGetCourseError: (state, action) => {
      state.getCourseError = action.payload;
    },
    setMyCourseList: (state, action) => {
      state.myCourseList = action.payload;
      state.getMyCourseListError = null;
    },
    setIsGettingMyCourseList: (state, action) => {
      state.isGettingMyCourseList = action.payload;
    },
    setGetMyCourseListError: (state, action) => {
      state.getMyCourseListError = action.payload;
    },
  },
});

// action
export const {
  setCourseList,
  setIsGettingCourseList,
  setGetCourseListError,
  setCourse,
  setIsGettingCourse,
  setGetCourseError,
  setMyCourseList,
  setIsGettingMyCourseList,
  setGetMyCourseListError,
} = courseSlice.actions;

// redux thunk function
export const getCourseList = () => (dispatch) => {
  dispatch(setIsGettingCourseList(true));
  getCourseListAPI()
    .then((json) => {
      if (json.ok === 0) {
        dispatch(setGetCourseListError(json.errorMessage));
        dispatch(setIsGettingCourseList(false));
        return;
      }
      // success
      dispatch(setCourseList(json.data));
      dispatch(setIsGettingCourseList(false));
    })
    .catch((err) => {
      console.log("err: ", err);
    });
};
export const getCourse = (id) => (dispatch) => {
  dispatch(setIsGettingCourse(true));
  getCourseAPI(id)
    .then((json) => {
      if (json.ok === 0) {
        dispatch(setGetCourseError(json.errorMessage));
        dispatch(setIsGettingCourse(false));
        return;
      }
      // success
      dispatch(setCourse(json.data));
      dispatch(setIsGettingCourse(false));
    })
    .catch((err) => {
      console.log("err: ", err);
    });
};
export const getMyCourseList = () => (dispatch) => {
  dispatch(setIsGettingMyCourseList(true));
  getMyCourseListAPI()
    .then((json) => {
      if (json.ok === 0) {
        dispatch(setGetMyCourseListError(json.errorMessage));
        dispatch(setIsGettingMyCourseList(false));
        return;
      }
      // success
      dispatch(setMyCourseList(json.data));
      dispatch(setIsGettingMyCourseList(false));
    })
    .catch((err) => {
      console.log("err: ", err);
    });
};

export const addCourse = ({ title, price, description }) => (dispatch) => {
  if (!title || !description || price < 0) return;
  addCourseAPI(title, price, description)
    .then((json) => {
      if (json.ok === 0) {
        console.log(json);
        return;
      }
      // success
      console.log("新增課程成功");
    })
    .catch((err) => {
      console.log("err: ", err);
    });
};

export const updateCourse = ({ id, title, price, description, isPublic }) => (
  dispatch
) => {
  if (!title || price < 0) return;
  updateCourseAPI(id, title, price, description, isPublic)
    .then((json) => {
      if (json.ok === 0) {
        console.log(json);
        return;
      }
      // success
      console.log("更改課程成功");
    })
    .catch((err) => {
      console.log("err: ", err);
    });
};

// selector
export const selectCourseList = (store) => store.course.courseList;
export const selectIsGettingCourseList = (store) =>
  store.course.isGettingCourseList;
export const selectCourse = (store) => store.course.course;
export const selectIsGettingCourse = (store) => store.course.isGettingCourse;
export const selectMyCourseList = (store) => store.course.myCourseList;
export const selectIsGettingMyCourseList = (store) =>
  store.course.isGettingMyCourseList;

export default courseSlice.reducer;

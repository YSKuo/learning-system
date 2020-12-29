import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartReducer";
import courseReducer from "./reducers/courseReducer";
import teacherReducer from "./reducers/teacherReducer";
import userReducer from "./reducers/userReducer";
import memberReducer from "./reducers/memberReducer";

export default configureStore({
  reducer: {
    cart: cartReducer,
    course: courseReducer,
    teacher: teacherReducer,
    user: userReducer,
    member: memberReducer,
  },
});

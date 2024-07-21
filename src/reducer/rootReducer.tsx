import counterReducer from "./testReducer/counterSlice";
import usersReducer from "./userReducer/usersSlice";
const rootReducer = {
  counter: counterReducer,
  userState: usersReducer,
};
export default rootReducer;

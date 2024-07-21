import { configureStore, Tuple } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducer/rootReducer";
import rootSagas from "../saga/rootSaga";
const sagaMiddleware = createSagaMiddleware();
import logger from "redux-logger";

const store = configureStore({
  reducer: rootReducer,
  middleware: () => new Tuple(sagaMiddleware, logger),
});
sagaMiddleware.run(rootSagas);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;

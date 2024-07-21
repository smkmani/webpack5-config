import { all, fork } from "redux-saga/effects";
import dataWatch from "./Data/dataSaga";
export default function* rootSagas() {
  yield all([fork(dataWatch)]);
}

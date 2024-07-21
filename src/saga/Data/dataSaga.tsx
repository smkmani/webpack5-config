import { call, put, takeEvery } from "redux-saga/effects";
import { usersFail, usersSuccess } from "../../reducer/userReducer/usersSlice";
import { apiRequest } from "../../Services/require";

function* getDataFun(): any {
  try {
    const url = "users";
    const response = yield apiRequest("get", url);
    yield put(usersSuccess(response));
  } catch (err) {
    yield put(usersFail(err as any));
  }
}

export default function* dataWatch() {
  yield takeEvery("users/requestUser", getDataFun);
}

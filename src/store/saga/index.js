import { takeEvery } from "redux-saga/effects";
import { fetchUser } from "./fetchSaga";
import { searchSaga } from "./searchSaga";

import * as actionTypes from "../actions/actionTypes";
function* watchSaga() {
  yield takeEvery(actionTypes.FETCH_NEWS_Initiate, fetchUser);
  yield takeEvery(actionTypes.SEARCH_INIT, searchSaga);
}

export default watchSaga;

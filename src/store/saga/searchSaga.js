import { put } from "redux-saga/effects";
import axios from "axios";
import * as actions from "../actions/index";
export function* searchSaga(action) {
  let searchTerm = action.term;
  let articles = [];
  let totalResults;
  let url = `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=2468eac1ea8941819f11e76526b3dc83&pageSize=30`;
  yield put(actions.searchStart());
  try {
    const res = yield axios.get(url);
    const data = res.data;
    if (data.status === "ok") {
      totalResults = data.totalResults;
      yield put(actions.SearchResults(totalResults));
      articles = [...data.articles];
      yield put(actions.searchEnd());
      yield put(actions.searchSuccess(articles));
    }
  } catch (error) {
    yield put(actions.searchEnd());
    yield put(actions.searchFail("message Failed"));
    console.log(error);
  }
}

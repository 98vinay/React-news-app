import * as actions from "./actionTypes";

export function searchInit(data) {
  return {
    type: actions.SEARCH_INIT,
    term: data,
  };
}

export function searchStart() {
  return {
    type: actions.SEARCH_START,
  };
}

export function SearchResults(count) {
  return {
    type: actions.SEARCH_RESULTS,
    totalCount: count,
  };
}

export function searchSuccess(data) {
  return {
    type: actions.SEARCH_SUCCESS,
    payload: data,
  };
}

export function searchFail(err) {
  return {
    type: actions.SEARCH_FAILURE,
    message: err,
  };
}

export function searchEnd() {
  return {
    type: actions.SEARCH_END,
  };
}

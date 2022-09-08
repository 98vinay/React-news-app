import * as actionTypes from "./actionTypes";

export function searchInit(data, currPage) {
  return {
    type: actionTypes.SEARCH_INIT,
    term: data,
    pageNo: currPage,
  };
}

export function searchStart() {
  return {
    type: actionTypes.SEARCH_START,
  };
}

export function SearchResults(count) {
  return {
    type: actionTypes.SEARCH_RESULTS,
    totalCount: count,
  };
}

export function searchSuccess(data) {
  return {
    type: actionTypes.SEARCH_SUCCESS,
    payload: data,
  };
}

export function searchFail(err) {
  return {
    type: actionTypes.SEARCH_FAILURE,
    message: err,
  };
}

export function searchEnd() {
  return {
    type: actionTypes.SEARCH_END,
  };
}

export function setSearchPage(text, pageNo) {
  return {
    type: actionTypes.SEARCH_SET_PAGE,
    text,
    currPage: pageNo,
  };
}

export function clearSearchData() {
  return {
    type: actionTypes.SEARCH_CLEAR_DATA,
  };
}

import * as actionTypes from "../actions/actionTypes";
const initialstate = {
  loading: false,
  articles: [],
  errorMessage: "",
  totalCount: 0,
};

export default function searchPageReducer(state = initialstate, action) {
  switch (action.type) {
    case actionTypes.SEARCH_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.SEARCH_SUCCESS:
      const articleList = [...action.payload];
      return {
        ...state,
        articles: articleList,
      };
    case actionTypes.SEARCH_FAILURE:
      const message = action.message;
      return {
        ...state,
        errorMessage: message,
      };
    case actionTypes.SEARCH_END:
      return {
        ...state,
        loading: false,
      };
    case actionTypes.SEARCH_RESULTS:
      return {
        ...state,
        totalCount: action.totalCount,
      };
    default:
      return state;
  }
}

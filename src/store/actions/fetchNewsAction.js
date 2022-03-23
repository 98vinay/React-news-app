import * as actions from './actionTypes';

export function fetchNewsInit(data) {
    return {
        type: actions.FETCH_NEWS_Initiate,
        articleName:data
    }
}

export function fetchNewsStart() {
    return {
        type: actions.FETCH_NEWS_START,
    }
}

export function fetchNewsEnd() {
    return {
        type: actions.FETCH_NEWS_END,
    }
}

export function storeArticle(data) {
    return {
        type: actions.STORE_DETAILS_PAGE,
        currentArticle: data,
    }
}
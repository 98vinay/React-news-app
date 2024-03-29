import {put} from 'redux-saga/effects';
import axios from 'axios';
import * as actionTypes from '../actions/actionTypes';
import * as actions from '../actions/index';
export function* fetchUser(action) {
    let articles ;
    let articlesType ;
    switch(action.articleName) {
        case 'health':
            articlesType = actionTypes.FETCH_NEWS_HEALTH;
            break;
        case 'business':
            articlesType = actionTypes.FETCH_NEWS_BUSINESS;
            break;
        case 'technology':
            articlesType = actionTypes.FETCH_NEWS_TECHNOLOGY;
            break;
        case 'sports':
            articlesType = actionTypes.FETCH_NEWS_SPORTS;
            break;
        default:
            articlesType='';
            break;
    }
    yield put(actions.fetchNewsStart());
    try {
        const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=2468eac1ea8941819f11e76526b3dc83&category=${action.articleName}&pageSize=30`;
        const res = yield axios.get(url);
        const data = res.data;
        if(data.status === 'ok') {
            articles = [...data.articles];
            yield put(actions.fetchNewsEnd());
            yield put({
                type:  articlesType,
                articles
            });
        }
    }
    catch( error) {
        yield put(actions.fetchNewsEnd());
        console.log(error);
    }
}

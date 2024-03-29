import * as actionTypes from '../actions/actionTypes';

const initialstate = {
   loading:false,
   articles: {
        health:[],
        business:[],
        technology:[],
        sports:[]
   }

}
export default function fetchNews(state = initialstate,action) {
    switch(action.type) {
        case actionTypes.FETCH_NEWS_START: 
            return {
                ...state,
                loading:true
            }
        
        case actionTypes.FETCH_NEWS_END: 
        return {
            ...state,
            loading:false
        }
        case actionTypes.FETCH_NEWS_HEALTH:
            const healthArticles = [...action.articles]

            return {
                ...state,
                articles: {
                    ...state.articles,
                    health: healthArticles
                }
            }
        case actionTypes.FETCH_NEWS_BUSINESS:
            const businessArticles = [...action.articles]
            return {
                ...state,
                articles: {
                    ...state.articles,
                    business:businessArticles
                }
            }
        case actionTypes.FETCH_NEWS_TECHNOLOGY:
            const technologyArticles = [...action.articles]
            return {
                ...state,
                articles: {
                    ...state.articles,
                    technology:technologyArticles
                }
            }
        case actionTypes.FETCH_NEWS_SPORTS:
            const sportsArticles = [...action.articles]
            return {
                ...state,
                articles: {
                    ...state.articles,
                    sports:sportsArticles
                }
            }
        default:
            return state;
    }
}

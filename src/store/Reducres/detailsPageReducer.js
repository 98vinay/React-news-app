import * as actionTypes from '../actions/actionTypes';
const initialstate = {
    storedArticle : {}
}

export default function detailsPageReducer (state = initialstate , action) {

    switch(action.type) {
        case actionTypes.STORE_DETAILS_PAGE:
            const article = {...action.currentArticle};
            console.log('stored', action.currentArticle);
            return {
                ...state,
                storedArticle: article
            }
        default :
         return state;
    }
}
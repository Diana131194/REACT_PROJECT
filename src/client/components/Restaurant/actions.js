import { RestaurantActionsConstants } from './constants'

function searchReviewsAction(button, star) {
    return {
        type: RestaurantActionsConstants.SEARCH_REVIEWS,
        payload: {
            button, star
        }
    }
}

function searchReviewsSuccessAction(reviews){
    return {
        type: RestaurantActionsConstants.SEARCH_REVIEWS_SUCCESS,
        reviews
    }
}

function searchReviewsFailAction(message){
    return {
        type: RestaurantActionsConstants.SEARCH_REVIEWS_FAIL,
        message
    }
}

let RestaurantActions = {
    searchReviewsAction,
    searchReviewsSuccessAction,
    searchReviewsFailAction
};

export default RestaurantActions
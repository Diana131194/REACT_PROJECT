import { RestaurantsActionsConstants } from './constants'

function fetchAllRestaurantsAction() {
    return {
        type: RestaurantsActionsConstants.FETCH_ALL_RESTAURANTS,
        payload: {
            
        }
    }
}

function fetchAllRestaurantsSuccessAction(restaurants) {
    return {
        type: RestaurantsActionsConstants.FETCH_ALL_RESTAURANTS_SUCCESS,
        payload: {
            restaurants: restaurants
        }
    }
}

function fetchRestaurantReviewsAction(name, location){
    return {
        type: RestaurantsActionsConstants.FETCH_RESTAURANT_REVIEWS,
        payload: {
            name,
            location
        }
    }
}

function fetchRestaurantReviewSuccessAction(reviews) {
    return {
        type: RestaurantsActionsConstants.FETCH_RESTAURANT_REVIEWS_SUCCESS,
        payload: {
           reviews
        }
    }
}

function fetchRestaurantReviewFailAction(message) {
    return {
        type: RestaurantsActionsConstants.FETCH_RESTAURANT_REVIEWS_FAIL,
        payload: {
            message
        }
    }
}

function changeLayoutAction(layout) {
    return {
        type: RestaurantsActionsConstants.LAYOUT_CHANGED,
        payload: {
            layout: layout
        }
    }
}
function changeSortKeyAction(sortKey) {
    return {
        type: RestaurantsActionsConstants.FETCH_ALL_RESTAURANTS_SUCCESS,
        payload: {
            sortKey: sortKey
        }
    }
}



let RestaurantsActions = {
    fetchAllRestaurantsAction,
    fetchAllRestaurantsSuccessAction,
    changeSortKeyAction,
    changeLayoutAction,
    fetchRestaurantReviewsAction,
    fetchRestaurantReviewSuccessAction,
    fetchRestaurantReviewFailAction

};

export default RestaurantsActions
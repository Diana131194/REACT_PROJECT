import { RestaurantActionsConstants } from './constants'
import initialState from '../../initialState'
import { List } from 'immutable'

const RestaurantReducer = (state = initialState.restaurant, action) => {
    switch(action.type){
        case RestaurantActionsConstants.SEARCH_REVIEWS_SUCCESS:
            return {
                ...state,
                reviews: action.reviews
            }
        default:
            return state
    }

}

export default RestaurantReducer
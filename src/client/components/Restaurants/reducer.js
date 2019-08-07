import { RestaurantsActionsConstants } from './constants'
import initialState from '../../initialState'
import { List } from 'immutable'

const RestaurantsReducer = (state = initialState.restaurants, action) => {

   // console.log(action.payload.restaurants)
    switch(action.type){
        case RestaurantsActionsConstants.FETCH_ALL_RESTAURANTS_SUCCESS:
                console.log(action.payload.restaurants)
        return{
                 ...state,
                restaurants: action.payload.restaurants
        }

        case RestaurantsActionsConstants.LAYOUT_CHANGED:
                console.log(action.payload.layout)
        return{
                 ...state,
                layout: action.payload.layout
        }

        case RestaurantsActionsConstants.FETCH_RESTAURANT_REVIEWS_SUCCESS:
                return {
                        ...state,
                        current_reviews: action.payload.reviews
                }


        default:
            return state
    }

}

export default RestaurantsReducer
import { SelfProfileActionsConstants } from './constants'
import initialState from '../../initialState'

const SelfProfileReducer = (state = initialState.selfProfile, action) => {
    switch (action.type) {


        case SelfProfileActionsConstants.FETCH_REVIEWS_SUCCESS:
            return {
                ...state,
                reviews: action.payload.reviews
            }
        case SelfProfileActionsConstants.SAVE_REVIEW_SUCCESS:
            return {
                ...state,
                reviews: action.payload.reviews

            }

        case SelfProfileActionsConstants.EDIT_REVIEW_SUCCESS:
            return {
                ...state,
                reviews: action.payload.reviews
            }

        case SelfProfileActionsConstants.DELETE_REVIEW_SUCCESS:
            return {
                ...state,
                reviews: action.payload.reviews
            }
    

        default:
            return state
    }
}


export default SelfProfileReducer;
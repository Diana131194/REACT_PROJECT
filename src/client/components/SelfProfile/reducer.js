import { SelfProfileActionsConstants } from './constants'
import initialState from '../../initialState'

const SelfProfileReducer = (state = initialState.selfProfile, action) => {
    switch(action.type) {
        case SelfProfileActionsConstants.UPDATE_STATE_SUCCESS:
            return {
                ...state,
                userName: action.payload.name,
                location: action.payload.location,
                img: action.payload.img,
                reviews: action.payload.reviews
            }

        case SelfProfileActionsConstants.ADD_REVIEW:
            return {
                ...state,
                add_button: true
            }

        case SelfProfileActionsConstants.SAVE_REVIEW_SUCCESS:
            let new_reviews = [...(state.reviews), action.review]
            return {
                ...state,
                reviews: new List(new_reviews),
                date: new Date()
            }
    }
}
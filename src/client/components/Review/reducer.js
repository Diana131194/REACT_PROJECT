import { ReviewActionsConstants } from './constants'
import initialState from '../../initialState'

const ReviewReducer = (state = initialState.review, action) => {
    switch(action.type) {
        case ReviewActionsConstants.EDIT_CLICK :
            return {
                ...state,
                [action.save_tag] : true
            }

        case ReviewActionsConstants.SAVE_STARS_SUCCESS:
            return {
                ...state,
                [action.payload.save_tag]: false
            }

        case ReviewActionsConstants.DELETE_REVIEW_SUCCESS:
            return {
                ...state,
                deleted: true
            }


        default: 
            return state;
    }
}

export default ReviewReducer;
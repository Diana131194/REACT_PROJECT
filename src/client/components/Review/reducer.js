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
                [action.payload.save_tag]: false,
                [action.payload.tag]: [action.payload.num]
            }

        case ReviewActionsConstants.UPDATE_DELETED:
            return {
                ...state,
                deleted: true
            }

        case ReviewActionsConstants.CAHNGE_STARS:
            return {
                ...state,
                [action.payload.tag]: action.payload.num
            }

        default: 
            return state;
    }
}

export default ReviewReducer;
import { OtherProfileActionsConstants } from './constants'
import  initialState  from '../../initialState'

const OtherProfileReducer = (state = initialState.otherProfile, action) => {
    switch (action.type) {
        case OtherProfileActionsConstants.CLICK_REVIEW_SUCCESS:

        case OtherProfileActionsConstants.CLICK_REVIEW:
            return state
        default: 
            return state
    }
}

export default OtherProfileReducer
import { OtherProfileActionsConstants} from './constants'

function clickReviewAction(userName) {
    return {
        type: OtherProfileActionsConstants.CLICK_REVIEW,
        userName
    }
}

function clickReviewSuccessAction(reviews){
    return {
        type: OtherProfileActionsConstants.CLICK_REVIEW_SUCCESS,
        reviews
    }
}

function clickReviewFailAction(message) {
    return {
        type: OtherProfileActionsConstants.CLICK_REVIEW_FAIL,
        message
    }
}

let OtherProfileActions = {
    clickReviewAction,
    clickReviewSuccessAction,
    clickReviewFailAction
}

export default OtherProfileActions
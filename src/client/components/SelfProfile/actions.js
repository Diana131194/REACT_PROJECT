import { SelfProfileActionsConstants } from './constants'

function updateStateAction(userName) {
    return {
        type: SelfProfileActionsConstants.UPDATE_STATE,
        payload: {
            userName  
        }
    }
}

function updateStateSuccessAction(userName, location, img, reviews) {
    return {
        type: SelfProfileActionsConstants.UPDATE_STATE_SUCCESS,
        payload: {
            userName,
            location, 
            img,
            reviews
        }
    }
}

function updateStateFailAction(message) {
    return {
        type: SelfProfileActionsConstants.UPDATE_STATE_FAIL,
        message
    }
}

function addReviewAction() {
    return {
        type: SelfProfileActionsConstants.ADD_REVIEW
    }
}

function saveReviewAction(name, review) {
    return {
        type: SelfProfileActionsConstants.SAVE_REVIEW,
        payload: {
            name,
            review
        }
    }
}

function saveReviewSuccessAction(review) {
    return {
        type: SelfProfileActionsConstants.SAVE_REVIEW_SUCCESS,
        review
    }
}

function saveReviewFailAction(message) {
    return {
        type: SelfProfileActionsConstants.SAVE_REVIEW_FAIL,
        message
    }
}

let SelfProfileActions = {
    updateStateAction,
    updateStateSuccessAction,
    updateStateFailAction,
    addReviewAction,
    saveReviewAction,
    saveReviewSuccessAction,
    saveReviewFailAction
}

export default SelfProfileActions
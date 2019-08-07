import { SelfProfileActionsConstants } from './constants'


function addReviewAction() {
    return {
        type: SelfProfileActionsConstants.ADD_REVIEW
    }
}

function updateReviews(reviews) {
    return {
        type: SelfProfileActionsConstants.UPDATE_REVIEWS,
        payload: {
            reviews
        }
    }
}

function fetchReviewsSuccessAction(reviews) {
    return {
        type: SelfProfileActionsConstants.FETCH_REVIEWS_SUCCESS,
        payload: {
            reviews
        }
    }
}

function saveReviewAction(userName, review) {
    return {
        type: SelfProfileActionsConstants.SAVE_REVIEW,
        payload: {
            userName: userName,
            review: review
        }
    }
}

function saveReviewSuccessAction(reviews) {
    return {
        type: SelfProfileActionsConstants.SAVE_REVIEW_SUCCESS,
        payload: {
            reviews
        }

    }
}

function saveReviewFailAction(message) {
    return {
        type: SelfProfileActionsConstants.SAVE_REVIEW_FAIL,
        message
    }
}


function deleteAction(title, userName, location) {
    console.log("im in delete action")
    return {
        type: SelfProfileActionsConstants.DELETE_REVIEW,
        payload: {
            title,
            userName,
            location
        }
    }
}

function deleteSuccessAction(reviews) {
    return {
        type: SelfProfileActionsConstants.DELETE_REVIEW_SUCCESS,
        payload :{
            reviews
        }
    }
}

function deleteFailAction(message) {
    return {
        type: SelfProfileActionsConstants.DELETE_REVIEW_FAIL,
        message
    }
}
function fetchReviewsAction(userName) {
    return {
        type: SelfProfileActionsConstants.FETCH_REVIEWS,
        payload: {
            userName
        }
    }
}

function editReviewAction(userName, review) {
    return {
        type: SelfProfileActionsConstants.EDIT_REVIEW,
        payload: {
            userName,
            review
        }
    }
}


function editReviewSuccessAction(reviews) {
    return {
        type: SelfProfileActionsConstants.EDIT_REVIEW_SUCCESS,
        payload: {
            reviews
        }

    }
}

function editReviewFailAction(message) {
    return {
        type: SelfProfileActionsConstants.EDIT_REVIEW_FAIL,
        message
    }
}


let SelfProfileActions = {
    addReviewAction,
    saveReviewAction,
    saveReviewSuccessAction,
    saveReviewFailAction,
    updateReviews,
    deleteAction,
    deleteSuccessAction,
    deleteFailAction,
    fetchReviewsAction,
    fetchReviewsSuccessAction,
    editReviewAction,
    editReviewSuccessAction,
    editReviewFailAction
}

export default SelfProfileActions
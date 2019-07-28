import { ReviewActionsConstants } from './constants'

function editAction(save_tag){
    return {
        type: ReviewActionsConstants.EDIT_CLICK,
        save_tag
    }
}


function saveStarAction(save_tag, tag, num){
    return {
        type: ReviewActionsConstants.SAVE_STARS,
        payload: {
            save_tag,
            tag,
            num
        }
    }
}



function saveStarSuccessAction(save_tag, tag, num) {
    return {
        type: ReviewActionsConstants.SAVE_STARS,
        payload: {
            save_tag,
            tag,
            num
        }
    }
}


function saveStarFailAction(message) {
    return {
        type: ReviewActionsConstants.SAVE_STARS,
        message
    }
}

function deleteAction(title, userName) {
    return {
        type: ReviewActionsConstants.DELETE_REVIEW,
        payload: {
            title,
            userName
        }
    }
}

function deleteSuccessAction() {
    return {
        type: ReviewActionsConstants.DELETE_REVIEW_SUCCESS,     
    }
}

function deleteFailAction(message) {
    return {
        type: ReviewActionsConstants.DELETE_REVIEW_FAIL,
        message
    }
}





let ReviewActions = {
    editAction, 
    saveStarAction,
    saveStarSuccessAction,
    saveStarFailAction,
    deleteAction,
    deleteSuccessAction,
    deleteFailAction
}

export default ReviewActions
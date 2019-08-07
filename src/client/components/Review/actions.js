import { ReviewActionsConstants } from './constants'

function editAction(save_tag){
    return {
        type: ReviewActionsConstants.EDIT_CLICK,
        save_tag
    }
}


function updatedeletedReviewAction(){
    return {
        type: ReviewActionsConstants.UPDATE_DELETED
    }
}



function saveStarAction(save_tag, tag, num, userName, title, location){
    return {
        type: ReviewActionsConstants.SAVE_STARS,
        payload: {
            save_tag,
            tag,
            num,
            userName,
            title,
            location
        }
    }
}

function changeStarAction(tag, num) {
    return {
        type: ReviewActionsConstants.CHANGE_STARS,
        payload: {
            tag,
            num
        }
    }
}



function saveStarSuccessAction(save_tag, tag, num) {
    return {
        type: ReviewActionsConstants.SAVE_STARS_SUCCESS,
        payload: {
            save_tag,
            tag,
            num
        }
    }
}


function saveStarFailAction(message) {
    return {
        type: ReviewActionsConstants.SAVE_STARS_FAIL,
        message
    }
}







let ReviewActions = {
    editAction, 
    saveStarAction,
    saveStarSuccessAction,
    saveStarFailAction,  
    changeStarAction,
    updatedeletedReviewAction
}

export default ReviewActions
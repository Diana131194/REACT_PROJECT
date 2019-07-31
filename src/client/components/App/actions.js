import { AppActionsConstants} from './constants.js';


function updateTagAction(tag) {
  return {
    type: AppActionsConstants.UPDATE_TAG,
    payload: {
      tag
    }
  }
}

function updateLoginAction(userName, location, img, reviews) {
    return {
        type: AppActionsConstants.UPDATE_LOGIN,
        payload: {
            userName,
            location,
            img,
            reviews
        }
    }
}

function loadTagsAction(){
    return {
        type: AppActionsConstants.LOAD_TAGS,
        uri: '/api/load/tags'
    }
}

function loadTagsSuccessAction(tags){
    return {
        type: AppActionsConstants.LOAD_TAGS_SUCCESS,
        payload: {
            tags: tags
        }
    }
}

function loadTagsFailureAction(error){
    return {
        type: AppActionsConstants.LOAD_TAGS_FAILURE,
        error: error
    }
}

let AppActions  = {
    updateTagAction,
    updateLoginAction,
    loadTagsAction,
    loadTagsSuccessAction,
    loadTagsFailureAction
};

export default AppActions

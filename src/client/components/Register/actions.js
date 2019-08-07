import { RegisterActionsConstants} from './constants'

function loadCitiesAction(){
    console.log("hello from city loader")
    return {
        type: RegisterActionsConstants.LOAD_CITIES,
    }
}

function updateNameAction(userName){
    return {
        type: RegisterActionsConstants.UPDATE_NAME,
        payload: {
            userName
        }
    }
}

function updatePasswordAction(password){
    return {
        type: RegisterActionsConstants.UPDATE_PASSWORD,
        payload: {
            password
        }
    }
}

function updateLocationAction(location) {
    return {
        type: RegisterActionsConstants.UPDATE_LOCATION,
        payload: {
            location
        }
    }
}

function updateImgAction(event) {
    return {
        type: RegisterActionsConstants.UPDATE_IMG,
        payload: {
            event
        }
    }
}

function suggestLocationsAction(location) {
    return {
        type: RegisterActionsConstants.SUGGEST_LOCATIONS,
        payload: {
            location
        }
    }
}

function clickAction(event, data, img) {
    console.log("%%%%%%%%%%%%%" + data.userName)
    return {     
        type: RegisterActionsConstants.CLICK,
        payload: {
            event,
            userName: data.userName,
            password: data.password,
            location: data.location,
            img
        }
    }
}

function updateNameSuccessAction(res, userName){
    return {
        type: RegisterActionsConstants.UPDATE_NAME_SUCCESS,
        payload: {
            res,
            userName
        }
    }
}

function updateNameFailAction(message) {
    return {
        type: RegisterActionsConstants.UPDATE_NAME_FAIL,
        message
    }
}

function clickSuccessAction(img) {
    return {
        type: RegisterActionsConstants.CLICK_SUCCESS,
        payload: {
            img
        }
    }
}

function clickFailAction(message) {
    return {
        type: RegisterActionsConstants.CLICK_FAIL,
        message
    }
}

let RegisterActions = {
    loadCitiesAction,
    updateNameAction,
    updatePasswordAction,
    updateLocationAction,
    updateImgAction,
    suggestLocationsAction,
    clickAction,
    updateNameSuccessAction,
    updateNameFailAction,
    clickSuccessAction,
    clickFailAction

};

export default RegisterActions

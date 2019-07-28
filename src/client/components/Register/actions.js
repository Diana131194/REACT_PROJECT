import { RegisterActionsConstants} from './constants'

function loadCitiesAction(){
    console.log("hello from city loader")
    return {
        type: RegisterActionsConstants.LOAD_CITIES,
    }
}

function updateNameAction(name){
    return {
        type: RegisterActionsConstants.UPDATE_NAME,
        payload: {
            name
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

function suggestLocationsAction(event) {
    return {
        type: RegisterActionsConstants.SUGGEST_LOACTIONS,
        payload: {
            event
        }
    }
}

function clickAction(event, props) {
    return {
        type: RegisterActionsConstants.CLICK,
        payload: {
            event,
            userName: props.userName,
            password: props.password,
            location: props.location,
            img: props.img
        }
    }
}

function updateNameSuccessAction(res){
    return {
        type: RegisterActionsConstants.UPDATE_NAME_SUCCESS,
        payload: {
            res
        }
    }
}

function updateNameFailAction(message) {
    return {
        type: RegisterActionsConstants.UPDATE_NAME_FAIL,
        message
    }
}

function clickSuccessAction() {
    return {
        type: RegisterActionsConstants.CLICK_SUCCESS
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

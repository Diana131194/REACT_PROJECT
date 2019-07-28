import { SelfPropertiesActionsConstants } from './constants'

function editedNameAction(userName) {
    return {
        type: SelfPropertiesActionsConstants.UPDATE_EDITED_NAME,
        userName
    }
}

function editedLocationAction(location) {
    return {
        type: SelfPropertiesActionsConstants.UPDATE_EDITED_LOCATION,
        location
    }
}

function editNameAction(userName) {
    return {
        type: SelfPropertiesActionsConstants.UPDATE_NAME,
        userName
    }
}

function editLocationAction(location) {
    return {
        type: SelfPropertiesActionsConstants.UPDATE_LOCATION,
        location
    }
}

function editNameSuccessAction() {
    return {
        type: SelfPropertiesActionsConstants.UPDATE_NAME_SUCCESS
    }
}

function editNameFailAction(message) {
    return {
        type: SelfPropertiesActionsConstants.UPDATE_NAME_FAIL,
        message
    }
}

function editLocationSuccessAction() {
    return {
        type: SelfPropertiesActionsConstants.UPDATE_LOCATION_SUCCESS
    }
}

function editLocationFailAction(message) {
    return {
        type: SelfPropertiesActionsConstants.UPDATE_LOCATION_FAIL,
        message
    }
}

let SelfPropertiesActions = {
    editedNameAction,
    editedLocationAction,
    editNameAction,
    editLocationAction,
    editNameSuccessAction,
    editNameFailAction,
    editLocationSuccessAction,
    editLocationFailAction

}

export default SelfPropertiesActions
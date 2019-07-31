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

function editNameAction(oldUserName, newUserName) {
    return {
        type: SelfPropertiesActionsConstants.UPDATE_NEW_NAME,
        payload: {
            oldUserName,
            newUserName
        }
        
    }
}

function editLocationAction(oldLocation, newLocation) {
    return {
        type: SelfPropertiesActionsConstants.UPDATE_NEW_LOCATION,
        oldLocation,
        newLocation
    }
}

function editNameSuccessAction() {
    return {
        type: SelfPropertiesActionsConstants.UPDATE_NEW_NAME_SUCCESS
    }
}

function editNameFailAction(message) {
    return {
        type: SelfPropertiesActionsConstants.UPDATE_NEW_NAME_FAIL,
        message
    }
}

function editLocationSuccessAction() {
    return {
        type: SelfPropertiesActionsConstants.UPDATE_NEW_LOCATION_SUCCESS
    }
}

function editLocationFailAction(message) {
    return {
        type: SelfPropertiesActionsConstants.UPDATE_NEW_LOCATION_FAIL,
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
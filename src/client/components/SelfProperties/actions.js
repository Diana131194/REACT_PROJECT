import { SelfPropertiesActionsConstants } from './constants'


function editNameAction(oldUserName, newUserName) {
    return {
        type: SelfPropertiesActionsConstants.UPDATE_NEW_NAME,
        payload: {
            oldUserName,
            newUserName,
        }
        
    }
}

function editLocationAction(newLocation, userName) {
    return {
        type: SelfPropertiesActionsConstants.UPDATE_NEW_LOCATION,
        payload:{
            newLocation,
            userName
        }
      
    }
}

function editNameSuccessAction(newName) {
    return {
        type: SelfPropertiesActionsConstants.UPDATE_NEW_NAME_SUCCESS,
        payload: {
            newName
        }
    }
}

function editNameFailAction(message) {
    return {
        type: SelfPropertiesActionsConstants.UPDATE_NEW_NAME_FAIL,
        message
    }
}

function editLocationSuccessAction(newLocation) {
    return {
        type: SelfPropertiesActionsConstants.UPDATE_NEW_LOCATION_SUCCESS,
        payload: {
            newLocation
        }
    }
}

function editLocationFailAction(message) {
    return {
        type: SelfPropertiesActionsConstants.UPDATE_NEW_LOCATION_FAIL,
        message
    }
}

let SelfPropertiesActions = {
    editNameAction,
    editLocationAction,
    editNameSuccessAction,
    editNameFailAction,
    editLocationSuccessAction,
    editLocationFailAction

}

export default SelfPropertiesActions
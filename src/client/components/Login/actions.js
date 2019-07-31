import { LoginActionsConstants } from './constants'

function updateNameAction(userName) {
    return {
        type: LoginActionsConstants.UPDATE_LOGIN_NAME,
        userName
    }
}

function updatePasswordAction(password) {
    return {
        type: LoginActionsConstants.UPDATE_LOGIN_PASSWORD,
        password
    }
}

function loginButtonAction(event, userName, password) {
    return {
        type: LoginActionsConstants.LOGIN_BUTTON,
        payload: {
            event,
            userName,
            password
        }
    }
}

function loginButtonSuccessAction(res, message) {
    return {
        type: LoginActionsConstants.LOGIN_BUTTON_SUCCESS,
        res,
        message
    }
}

function loginButtonFailAction(message) {
    return {
        type: LoginActionsConstants.LOGIN_BUTTON_FAIL,
        message
    }
}

let LoginActions = {
    updateNameAction,
    updatePasswordAction,
    loginButtonAction,
    loginButtonSuccessAction,
    loginButtonFailAction
}

export default LoginActions

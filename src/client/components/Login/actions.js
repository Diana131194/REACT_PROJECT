import { LoginActionsConstants } from './constants'

function updateNameAction(userName) {
    return {
        type: LoginActionsConstants.UPDATE_NAME,
        userName
    }
}

function updatePasswordAction(password) {
    return {
        type: LoginActionsConstants.UPDATE_PASSWORD,
        password
    }
}

function loginButtonAction(event, props) {
    return {
        type: LoginActionsConstants.LOGIN_BUTTON,
        payload: {
            event,
            props
        }
    }
}

function loginButtonSuccessAction(res, props) {
    return {
        type: LoginActionsConstants.LOGIN_BUTTON_SUCCESS,
        res,
        props
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

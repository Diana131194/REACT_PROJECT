import { LoginActionsConstants } from './constants'
import initialState from '../../initialState'

const LoginReducer = (state = initialState.login, action) => {
    switch(action.type) {
        case LoginActionsConstants.UPDATE_LOGIN_NAME:
            return {
                ...state,
                userName: action.userName
            }
        case LoginActionsConstants.UPDATE_LOGIN_PASSWORD:
            return {
                ...state,
                password: action.password
            }
        case LoginActionsConstants.LOGIN_BUTTON_SUCCESS:
            if (action.res === true) {
                return {
                    userName: '',
                    password: ''
                }
            }
           else {
                return {
                    ...state,
                    message: action.message
                }
            }
        default: 
            return state
    }
}

export default LoginReducer
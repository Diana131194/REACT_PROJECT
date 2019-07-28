import { LoginActionsConstants } from './constants'
import initialState from '../../initialState'

const LoginReducer = (state = initialState.login, action) => {
    switch(action.type) {
        case LoginActionsConstants.UPDATE_NAME:
            return {
                ...state,
                userName: action.userName
            }
        case LoginActionsConstants.UPDATE_PASSWORD:
            return {
                ...state,
                password: action.password
            }
        case LoginActionsConstants.LOGIN_BUTTON_SUCCESS:
            if (action.res === true) {
                action.props.history.push('/' + action.props.userName)
            }
            else {
                <div><h2 style={{ color: "red", fontSize: "15px" }}>The user name or the password incorrect, please try again</h2></div>
                return {
                    state
                }
            }
        default: 
            return state
    }
}

export default LoginReducer
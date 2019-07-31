import { LoginActionsConstants } from './constants'
import { call, put, takeEvery } from 'redux-saga/effects'
import LoginActions from './actions'
import AppActions from '../App/actions'


function* login (action) {
    action.payload.event.preventDefault();

    console.log("LoginSaga=", action)

    try {
        const res = yield call(fetch, '/api/user/login',
        {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({ userName: action.payload.userName, password: action.payload.password})
        })
        const json = yield call([res, 'json'])
        if(json.succeded){
            yield put(LoginActions.loginButtonSuccessAction(true, ''))
            yield put(AppActions.updateLoginAction(json.userName, json.location, json.img, json.reviews))
        }
        else {
            yield put(LoginActions.loginButtonSuccessAction(false, json.message))
        }
        
       }
       catch(e) {
            yield put(LoginActions.loginButtonFailAction(e.message))
       }

    }

function* LoginSaga() {
    console.log("hello from login saga")
    yield takeEvery(LoginActionsConstants.LOGIN_BUTTON, login);
}

export default LoginSaga;
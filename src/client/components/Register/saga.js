import { RegisterActionsConstants} from './constants'
import { call, put, takeEvery } from 'redux-saga/effects'
import RegisterActions from './actions'


function* updateName(action) {
    console.log("hello from update name")
    console.log(action.payload.userName)
    try {
        const res = yield call(fetch, '/api/user/exists?userName=' + action.payload.userName) 
        console.log("im in update name!!!!")
        const json = yield call([res, 'json'])
        console.log(json)
        console.log(json.exists)
        console.log(json.userName)
        yield put(RegisterActions.updateNameSuccessAction(json.exists, json.userName));
    } catch (e) {
        yield put(RegisterActions.updateNameFailAction(e.message));
    }
}

function* click (action) {
    action.payload.event.preventDefault();

    console.log('RegisterSaga=', action);
   
    try {
        const res = yield call(fetch, '/api/user/register',
            {
                method: 'POST',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({ userName: action.payload.userName, 
                                       location: action.payload.location, 
                                       img: action.payload.img, 
                                       password: action.payload.password})
            });

        const json = yield call([res, 'json']); //retrieve body of response
        if (json.succeded) {
            yield put(RegisterActions.clickSuccessAction());
        } else {
            yield put(RegisterActions.clickFailAction(json.error));
        }
    } catch (e) {
        yield put(RegisterActions.clickFailAction(e.message));
    }
}

function* RegisterSaga() {
    console.log("hello from register saga")
    yield takeEvery(RegisterActionsConstants.UPDATE_NAME, updateName);
    yield takeEvery(RegisterActionsConstants.CLICK, click);
}

export default RegisterSaga;
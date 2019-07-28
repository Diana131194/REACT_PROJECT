import { RegisterActionsConstants} from './constants'
import { call, put, takeEvery } from 'redux-saga/effects'
import RegisterActions from './actions'
import {checkIfExists, addUser} from '../../../server/api/register'


function* click (action) {
    action.payload.event.preventDefault();
    let {props} = action.payload;
    try {
        yield call(addUser, props.userName, props.password, props.location, props.img)    
        yield put(RegisterActions.clickSuccessAction())
    }
    catch (error) {
        yield put(RegisterActions.clickFailAction(error.message));
    }
}

function* updateName(action) {
    try {
        const res = yield call(checkIfExists, action.payload.name);
        yield put(RegisterActions.updateNameSuccessAction(res))      
    }
    catch (error){
        yield put(RegisterActions.updateNameFailAction(error.message));
    }
}


function* RegisterSaga() {
    console.log("hello from saga")
    yield takeEvery(RegisterActionsConstants.UPDATE_NAME, updateName);
    yield takeEvery(RegisterActionsConstants.CLICK, click);
}

export default RegisterSaga;
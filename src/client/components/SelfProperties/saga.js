import { SelfPropertiesActionsConstants } from './constants'
import { call, put, takeEvery } from 'redux-saga/effects'
import SelfPropertiesActions from './actions'


function* updateNewName(action) {

    try{
        yield call(fetch, '/api/updateName',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    oldUserName: action.payload.oldUserName,
                    newUserName: action.payload.newUserName
                })
            })
        yield put(SelfPropertiesActions.editNameSuccessAction())
    }
    catch(e) {
        yield put(SelfPropertiesActions.editNameFailAction(e.message))
    }
}


function* SelfPropertiesSaga() {
    console.log("hello from self-property saga")
    yield takeEvery(SelfPropertiesActionsConstants.UPDATE_NEW_NAME, updateNewName);

}

export default SelfPropertiesSaga;
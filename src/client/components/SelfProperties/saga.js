import { SelfPropertiesActionsConstants } from './constants'
import { call, put, takeEvery } from 'redux-saga/effects'
import SelfPropertiesActions from './actions'
import AppActions from '../App/actions'



function* updateNewName(action) {
    console.log("in update name saga")
    try{
        const res = yield call(fetch, '/api/updateName', 
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
        console.log("after update")
        const json = yield call([res, 'json'])
        yield put(SelfPropertiesActions.editNameSuccessAction(json.newName))
        yield put(AppActions.updateLoggedNameAction(json.newName))
    }
    catch(e) {
        yield put(SelfPropertiesActions.editNameFailAction(e.message))
    }
}

function* updateNewLocation(action) {
    console.log("in update location saga")
    try {
        const res = yield call(fetch, '/api/updateLocation',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userName: action.payload.userName,
                    newLocation: action.payload.newLocation
                })
            })
        const json = yield call([res, 'json'])
        yield put(SelfPropertiesActions.editLocationSuccessAction(json.newLocation))
        yield put(AppActions.updateLoggedLocationAction(json.newLocation))
    }
    catch (e) {
        yield put(SelfPropertiesActions.editNameFailAction(e.message))
    }
}


function* SelfPropertiesSaga() {
    console.log("hello from self-property saga")
    yield takeEvery(SelfPropertiesActionsConstants.UPDATE_NEW_NAME, updateNewName);
    yield takeEvery(SelfPropertiesActionsConstants.UPDATE_NEW_LOCATION, updateNewLocation);

}

export default SelfPropertiesSaga;
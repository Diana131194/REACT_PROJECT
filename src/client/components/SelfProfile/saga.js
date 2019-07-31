import { SelfProfileActionsConstants } from './constants'
import { call, put, takeEvery } from 'redux-saga/effects'
import SelfProfileActions from './actions'


function* updateState (action) {
    
    try {
        const res = yield call(fetch, '/api/myProfileData',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userName: action.payload.userName,
                })
            })
        const json = yield call([res, 'json'])
        yield put(SelfProfileActions.updateStateSuccessAction(action.payload.userName, json.location, json.img, json.reviews))
    }
    catch(e){
        yield put(SelfProfileActions.updateStateFailAction(e.message))
    }

}



function* SelfProfileSaga() {
    console.log("hello from self-profile saga")
    yield takeEvery(SelfProfileActionsConstants.UPDATE_STATE, updateState);
    
}

export default SelfProfileSaga;
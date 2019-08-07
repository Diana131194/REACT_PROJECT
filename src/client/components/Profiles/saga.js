import {ProfilesActionsConstants} from './constants'
import { call, put, takeEvery, select } from 'redux-saga/effects'
import ProfilesActions from './actions'
//import {checkIfExists, addUser} from '../../../server/api/register'
//import { on } from 'cluster';


function* fetchProfiles() {
    console.log("hello from get profiles")
    try {
        const res = yield call(fetch, '/api/users/fetch');
        const json = yield call([res, 'json'])
        yield put(ProfilesActions.fetchAllProfilesSuccessAction(json));
    } catch (e) {
       // yield put(RegisterActions.updateNameFailAction(e.message));
    }
}

function* fetchUsersReviews(action) {
    console.log("hello from get users reviews")
    try {
        const res = yield call(fetch, '/api/getUsersReviews', 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userName: action.payload.userName})
            }
        );
        console.log("after get users")
        const json = yield call([res, 'json'])
        console.log("this is the reviews in saga: ")
        yield put(ProfilesActions.fetchUsersReviewsSuccessAction(json.reviews));
    } catch (e) {
        // yield put(RegisterActions.updateNameFailAction(e.message));
    }
}

function* RegisterSaga() {
    yield takeEvery(ProfilesActionsConstants.FETCH_ALL_PROFILES, fetchProfiles);
    yield takeEvery(ProfilesActionsConstants.FETCH_USERS_REVIEWS, fetchUsersReviews);
}

export default RegisterSaga;
import { ReviewActionsConstants } from './constants'
import { call, put, takeEvery } from 'redux-saga/effects'
import ReviewActions from './actions'
import AppActions from '../App/actions'


function* saveStars (action) {
    console.log("hello from save stars")
    try {
        const res = yield call(fetch, '/api/edit/userReview',
           { method: 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userName: action.payload.userName,
                tag: action.payload.tag,
                save_tag: action.payload.save_tag,
                stars: action.payload.num,
                title: action.payload.title,
                location: action.payload.location

            })
        
            })
        const json = yield call([res, 'json'])
        console.log("after update")
        if(json.success){
            yield put(ReviewActions.saveStarSuccessAction(action.payload.save_tag, action.payload.tag, action.payload.num))
           // yield put(AppActions.updateLoggedReviewsAction(json.reviews))
        }
    }
    catch(e) {
        yield put(ReviewActions.saveStarFailAction(e.message))
    }
}



function* ReviewSaga() {
    console.log("hello from rview saga")
    yield takeEvery(ReviewActionsConstants.SAVE_STARS, saveStars);
}

export default ReviewSaga;
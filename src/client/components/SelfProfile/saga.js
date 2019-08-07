import { SelfProfileActionsConstants } from './constants'
import { call, put, takeEvery } from 'redux-saga/effects'
import SelfProfileActions from './actions'
import AppActions from '../App/actions'
import ReviewActions from '../Review/actions'

function* editReview(action) {
    try {
        console.log("before editing")
        const res = yield call(fetch, '/api/editReview',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userName: action.payload.userName,
                    review: action.payload.review
                })
            })
        const json = yield call([res, 'json'])
        console.log("after editing")
        
        yield put(SelfProfileActions.editReviewSuccessAction(json.reviews))
        

        // yield put(AppActions.updateLoggedReviewsAction(json.reviews))
    }
    catch (e) {
        yield put(SelfProfileActions.editReviewFailAction(e.message))
    }
}

function* saveReview(action) {
    try {
        console.log("before saving")
        console.log("the review that came back")
        const res1 = yield call(fetch, '/api/saveReview',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userName: action.payload.userName,
                    review: action.payload.review
                })
            })
        const json = yield call([res1, 'json'])
        console.log(json)
        console.log("after saving")
        console.log("the review that came back")
        yield put(SelfProfileActions.saveReviewSuccessAction(json.reviews))}

        // yield put(AppActions.updateLoggedReviewsAction(json.reviews))

    catch (e) {
        yield put(SelfProfileActions.saveReviewFailAction(e.message))
    }
}

function* fetchReviews(action) {
    console.log(
        "hello from fetch reviews"
    )
    console.log(action.payload.userName)
    try {
        const res = yield call(fetch, '/api/ReviewsByUser',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userName: action.payload.userName
                })

            }


        );
        const json = yield call([res, 'json'])
        console.log("after fetch from backend")
        yield put(SelfProfileActions.fetchReviewsSuccessAction(json.reviews));
    } catch (e) {
        // yield put(RegisterActions.updateNameFailAction(e.message));
    }
}


function* deleteReview(action) {
    console.log("hello from delete review")
    try {
        const res = yield call(fetch, '/api/deleteReview',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userName: action.payload.userName,
                    title: action.payload.title,
                    location: action.payload.location

                })

            })
        const json = yield call([res, 'json'])
   
            yield put(SelfProfileActions.deleteReviewSuccessAction(json.reviews))
            //  yield put(ReviewActions.updatedeletedReviewAction())

        
    }
    catch (e) {
        yield put(SelfProfileActions.deleteFailAction(e.message))
    }
}


function* SelfProfileSaga() {
    console.log("hello from self-profile saga")
    yield takeEvery(SelfProfileActionsConstants.SAVE_REVIEW, saveReview)
    yield takeEvery(SelfProfileActionsConstants.DELETE_REVIEW, deleteReview)
    yield takeEvery(SelfProfileActionsConstants.FETCH_REVIEWS, fetchReviews)
    yield takeEvery(SelfProfileActionsConstants.EDIT_REVIEW, editReview)
}

export default SelfProfileSaga;
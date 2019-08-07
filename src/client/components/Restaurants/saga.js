import {RestaurantsActionsConstants} from './constants'
import { call, put, takeEvery, select } from 'redux-saga/effects'
import RestaurantsActions from './actions'
//import {checkIfExists, addUser} from '../../../server/api/register'
//import { on } from 'cluster';


function* fetchRestaurants() {
    console.log("hello from get restaurants")
    try {
        const res = yield call(fetch, '/api/restaurants/fetch');
        const json = yield call([res, 'json'])
        console.log(json)
        yield put(RestaurantsActions.fetchAllRestaurantsSuccessAction(json));
    } catch (e) {
       // yield put(RegisterActions.updateNameFailAction(e.message));
    }
}

function* fetchRestaurantReviews(action) {
    try {
        const res = yield call(fetch, '/api/restaurantReviews',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: action.payload.name, location: action.payload.location })
            })
        const json = yield call([res, 'json'])
       
            yield put(RestaurantsActions.fetchRestaurantReviewSuccessAction(json.reviews))

    }
    catch (e) {
        yield put(RestaurantsActions.fetchRestaurantReviewFailAction(e.message))
    }
}

function* RegisterSaga() {
    yield takeEvery(RestaurantsActionsConstants.FETCH_ALL_RESTAURANTS, fetchRestaurants);
    yield takeEvery(RestaurantsActionsConstants.FETCH_RESTAURANT_REVIEWS, fetchRestaurantReviews);

}

export default RegisterSaga;
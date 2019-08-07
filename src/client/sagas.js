import { all } from 'redux-saga/effects'
import GallerySaga from './components/Gallery/saga'
import AppSaga from './components/App/saga'
import RegisterSaga from './components/Register/saga'
import LoginSaga from './components/Login/saga'
import SelfProfileSaga from './components/SelfProfile/saga'
import SelfPropertiesSaga from './components/SelfProperties/saga'
import ReviewSaga from './components/Review/saga'
import RestaurantsSaga from './components/Restaurants/saga'
import ProfilesSaga from './components/Profiles/saga'


export default function* Sagas() {
    yield all([
        AppSaga(),
        GallerySaga(),
        RegisterSaga(),
        LoginSaga(),
        SelfProfileSaga(),
        SelfPropertiesSaga(),
        ReviewSaga(),
        RestaurantsSaga(),
        ProfilesSaga()
    ])
}

import { all } from 'redux-saga/effects'
import GallerySaga from './components/Gallery/saga'
import AppSaga from './components/App/saga'
import RegisterSaga from './components/Register/saga'

export default function* Sagas() {
    yield all([
        AppSaga(),
        GallerySaga(),
        RegisterSaga()
    ])
}

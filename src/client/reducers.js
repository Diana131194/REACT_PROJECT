import { combineReducers } from 'redux';
import GalleryReducer from './components/Gallery/reducer';
import AppReducer from './components/App/reducer';
import RegisterReducer from './components/Register/reducer';
import LoginReducer from './components/Login/reducer';
import OtherProfileReducer from './components/OtherProfile/reducer';
import SelfPropertiesReducer from './components/SelfProperties/reducer';
import ReviewReducer from './components/Review/reducer';

export default combineReducers({
  app: AppReducer,
  gallery: GalleryReducer,
  register: RegisterReducer,
  login: LoginReducer,
  otherProfile: OtherProfileReducer,
  selfProperties: SelfPropertiesReducer,
  review : ReviewReducer
});

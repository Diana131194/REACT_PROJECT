import initialState from '../../initialState';
import {AppActionsConstants} from './constants.js';
import { List } from 'immutable';

const AppReducer = (state = initialState.app, action) => {
    console.log('AppReducerState=', state);
    console.log('RECEIVED ACTION:', action);
    
    switch (action.type){
        case AppActionsConstants.UPDATE_TAG:
            return state.set('tag', action.payload.tag);
        case AppActionsConstants.LOAD_TAGS_SUCCESS:
            let res = action.payload.tags.map(elm => {
                return {label: elm, value: elm }
            });
            return state.set('tags', new List(res));
        
        case AppActionsConstants.UPDATE_LOGIN:
            console.log("im in login update!!!")
            state = state.set('logged_in', action.payload.userName)
            state = state.set('location_logged_in' ,action.payload.location)
            state = state.set('img_logged_in', action.payload.img)
            state = state.set('reviews_logged_in', action.payload.reviews)
            return state;
         
        default: //otherwise state is lost!
            return state;
    }
};

export default AppReducer

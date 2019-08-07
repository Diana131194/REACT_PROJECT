import { ProfilesActionsConstants } from './constants'
import initialState from '../../initialState'
import { List } from 'immutable'

const ProfilesReducer = (state = initialState.profiles, action) => {

   // console.log(action.payload.profiles)
    switch(action.type){
        case ProfilesActionsConstants.FETCH_ALL_PROFILES_SUCCESS:
        return{
                 ...state,
                profiles: action.payload.profiles
        }

        case ProfilesActionsConstants.LAYOUT_CHANGED:
        return{
                 ...state,
                layout: action.payload.layout
        }

        case ProfilesActionsConstants.FETCH_USERS_REVIEWS_SUCCESS:
                return {
                        ...state,
                        current_reviews: action.payload.reviews
                }


        default:
            return state
    }

}

export default ProfilesReducer
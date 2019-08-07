import {ProfilesActionsConstants} from './constants'

function fetchAllProfilesAction() {
    return {
        type: ProfilesActionsConstants.FETCH_ALL_PROFILES,
        payload: {
            
        }
    }
}

function fetchUsersReviewsAction(userName) {
    return {
        type: ProfilesActionsConstants.FETCH_USERS_REVIEWS,
        payload: {
            userName
        }
    }
}

function fetchUsersReviewsSuccessAction(reviews) {
    return {
        type: ProfilesActionsConstants.FETCH_USERS_REVIEWS_SUCCESS,
        payload: {
            reviews
        }
    }
}

function fetchUsersReviewsFailAction(message) {
    return {
        type: ProfilesActionsConstants.FETCH_USERS_REVIEWS_FAIL,
        payload: {
            message
        }
    }
}

function fetchAllProfilesSuccessAction(profiles) {
    return {
        type: ProfilesActionsConstants.FETCH_ALL_PROFILES_SUCCESS,
        payload: {
            profiles: profiles
        }
    }
}

function changeLayoutAction(layout) {
    return {
        type: ProfilesActionsConstants.LAYOUT_CHANGED,
        payload: {
            layout: layout
        }
    }
}
function changeSortKeyAction(sortKey) {
    return {
        type: ProfilesActionsConstants.FETCH_ALL_PROFILES_SUCCESS,
        payload: {
            sortKey: sortKey
        }
    }
}



let ProfilesActions = {
    fetchAllProfilesAction,
    fetchAllProfilesSuccessAction,
    changeSortKeyAction,
    changeLayoutAction,
    fetchUsersReviewsAction,
    fetchUsersReviewsSuccessAction,
    fetchUsersReviewsFailAction

};

export default ProfilesActions